package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	ID       uint64 `gorm:"primary_key"`
	Name     string
	Password string
}
