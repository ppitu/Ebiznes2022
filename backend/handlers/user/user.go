package user

import (
	"backend/database/models"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

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
