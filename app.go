package main

import (
	"context"
	"log"

	"github.com/Code-Hex/battery"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) GetBatteryPercentage() int {
	percentage, _, _, err := battery.Info()
	if err != nil {
		log.Println(err)
		return -1
	}

	return percentage
}
