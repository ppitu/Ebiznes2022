package routes

import (
	"backend/handlers"

	"github.com/labstack/echo/v4"
)

type CartRouter struct{}

func (cr CartRouter) Init(g *echo.Group) {
	g.GET("", handlers.GetAllCarts)
	g.POST("", handlers.CreateCart)
}
