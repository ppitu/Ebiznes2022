package routes

import (
	"backend/routes/category"
	"backend/routes/product"

	"github.com/labstack/echo/v4"
)

func Routes(g *echo.Group) {
	product.ProductRouter{}.Init(g.Group("/products"))
	category.CategoryRouter{}.Init(g.Group("/categories"))
}
