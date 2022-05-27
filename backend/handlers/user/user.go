package user

import (
	"backend/database/models"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/github"
	"golang.org/x/oauth2/google"
	"gorm.io/gorm"
)

func goDotEnvVariable(key string) string {
	err := godotenv.Load(".env")

	if err != nil {
		fmt.Println("Error loading .env file")
	}
	fmt.Println(os.Getenv(key))
	return os.Getenv(key)
}

func Get(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.NoContent(http.StatusPreconditionFailed)
	}

	db, _ := c.Get("db").(*gorm.DB)

	var user models.User
	if err := db.First(&user, id).Error; err != nil {
		return c.NoContent(http.StatusNotFound)
	}

	return c.JSON(http.StatusOK, user)
}

func GetAll(c echo.Context) error {
	var users []models.User

	db, _ := c.Get("db").(*gorm.DB)

	if err := db.Model(&models.User{}).Find(&users).Error; err != nil {
		return c.NoContent(http.StatusNotFound)
	}

	return c.JSON(http.StatusOK, users)
}

func Create(c echo.Context) error {
	type RequestBody struct {
		Name string `json:"name"`
	}

	var body RequestBody

	if err := c.Bind(&body); err != nil {
		return c.NoContent(http.StatusNotFound)
	}

	db, _ := c.Get("db").(*gorm.DB)

	user := models.User{
		Name: body.Name,
	}

	db.Create(&user)

	return c.JSON(http.StatusOK, user)
}

func Update(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.NoContent(http.StatusPreconditionFailed)
	}

	type RequestBody struct {
		Name string `json:"name"`
	}

	var body RequestBody

	if err := c.Bind(&body); err != nil {
		return c.NoContent(http.StatusNotFound)
	}

	db, _ := c.Get("db").(*gorm.DB)

	var user models.User
	if err := db.First(&user, id).Error; err != nil {
		return c.NoContent(http.StatusNotFound)
	}

	user.Name = body.Name

	db.Save(&user)

	return c.JSON(http.StatusOK, user)
}

func Delete(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.NoContent(http.StatusPreconditionFailed)
	}

	db, _ := c.Get("db").(*gorm.DB)

	var user models.User

	if err := db.Where("id = ?", id).First(&user).Error; err != nil {
		return c.NoContent(http.StatusNotFound)
	}

	db.Delete(&user)

	return c.NoContent(http.StatusOK)
}

// Scopes: OAuth 2.0 scopes provide a way to limit the amount of access that is granted to an access token.
var googleOauthConfig *oauth2.Config

var githubOauthConfig *oauth2.Config

var oauthState = "Random-string"

const oauthGoogleUrlAPI = "https://www.googleapis.com/oauth2/v2/userinfo?access_token="

func OauthGoogleLogin(c echo.Context) error {
	googleOauthConfig = &oauth2.Config{
		RedirectURL:  "http://localhost:3000/",
		ClientID:     os.Getenv("GOOGLECLIENTID"),
		ClientSecret: os.Getenv("GOOGLECLIENTSECRET"),
		Scopes:       []string{"https://www.googleapis.com/auth/userinfo.email"},
		Endpoint:     google.Endpoint,
	}

	fmt.Println(googleOauthConfig.ClientID)
	u := googleOauthConfig.AuthCodeURL(oauthState)
	return c.Redirect(http.StatusTemporaryRedirect, u)
}

func OAuthGithubLogin(c echo.Context) error {
	githubOauthConfig = &oauth2.Config{
		RedirectURL:  "http://localhost:3000/",
		ClientID:     goDotEnvVariable("GITHUBCLIENTID"),
		ClientSecret: goDotEnvVariable("GITHUBCLIENTSECRET"),
		Scopes:       []string{"https://github.com/login/oauth/access_token"},
		Endpoint:     github.Endpoint,
	}

	u := githubOauthConfig.AuthCodeURL(oauthState)
	return c.Redirect(http.StatusTemporaryRedirect, u)
}

func OauthGoogleCallback(c echo.Context) error {
	fmt.Println(c.Request().Body)
	_, err := getUserInfoGoogle(c.FormValue("state"), c.FormValue("code"))

	if err != nil {
		fmt.Println(err.Error())
		return c.Redirect(http.StatusTemporaryRedirect, "http://localhost:3000/")
	}

	return c.Redirect(http.StatusOK, "http://localhost:3000/")
}

func OauthGithubCallback(c echo.Context) error {
	fmt.Println(c.Request().Body)
	_, err := getUserInfoGithub(c.FormValue("state"), c.FormValue("code"))

	if err != nil {
		fmt.Println(err.Error())
		return c.Redirect(http.StatusTemporaryRedirect, "http://localhost:3000/")
	}

	return c.Redirect(http.StatusOK, "http://localhost:3000/")
}

func getUserInfoGoogle(state string, code string) ([]byte, error) {
	fmt.Println(state)
	fmt.Println(oauthState)
	if state != oauthState {
		return nil, fmt.Errorf("invalid oauth state")
	}
	token, err := googleOauthConfig.Exchange(oauth2.NoContext, code)
	if err != nil {
		return nil, fmt.Errorf("code exchange failed: %s", err.Error())
	}
	response, err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
	if err != nil {
		return nil, fmt.Errorf("failed getting user info: %s", err.Error())
	}
	defer response.Body.Close()
	contents, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return nil, fmt.Errorf("failed reading response body: %s", err.Error())
	}
	return contents, nil
}

func getUserInfoGithub(state string, code string) ([]byte, error) {
	fmt.Println(state)
	fmt.Println(oauthState)
	if state != oauthState {
		return nil, fmt.Errorf("invalid oauth state")
	}
	token, err := githubOauthConfig.Exchange(oauth2.NoContext, code)
	if err != nil {
		return nil, fmt.Errorf("code exchange failed: %s", err.Error())
	}
	response, err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
	if err != nil {
		return nil, fmt.Errorf("failed getting user info: %s", err.Error())
	}
	defer response.Body.Close()
	contents, err := ioutil.ReadAll(response.Body)
	if err != nil {
		return nil, fmt.Errorf("failed reading response body: %s", err.Error())
	}
	return contents, nil
}
