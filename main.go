package main

import (
	"fmt"
	"log"
	"os"
	"runtime"
)

const (
	colorBlue  = "\033[34m"
	colorRed   = "\033[31m"
	colorReset = "\033[0m"
)

// how to use
// var logger = NewLogger()
// logger.Info("Starting application...")
// logger.Error("Failed to connect to database: %s", err)
type Logger struct {
	infoLogger  *log.Logger
	errorLogger *log.Logger
}

func NewLogger() *Logger {
	return &Logger{
		infoLogger:  log.New(os.Stdout, colorBlue+"INFO\t"+colorReset, log.Ldate|log.Ltime),
		errorLogger: log.New(os.Stderr, colorRed+"ERROR\t"+colorReset, log.Ldate|log.Ltime),
	}
}

func (l *Logger) Info(format string, v ...interface{}) {
	// the 1 represet the stack jump the paret caller function
	_, file, line, ok := runtime.Caller(1)
	if ok {
		msg := fmt.Sprintf(format, v...)
		l.infoLogger.Printf("%s:%d:\n %s", file, line, msg)
	}
}

func (l *Logger) Error(format string, v ...interface{}) {
	_, file, line, ok := runtime.Caller(1)
	if ok {
		msg := fmt.Sprintf(format, v...)
		l.errorLogger.Printf("%s:%d:\n %s", file, line, msg)
	}
}
