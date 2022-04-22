package com.example

import com.slack.api.Slack
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Routing.homeRoute() {
    get("/") {
        val token = System.getenv("SLACK_TOKEN")
        val slack = Slack.getInstance()
        val response = slack.methods(token).chatPostMessage {
            println("Dizala")
            it.channel("#general")
                .text("Hello :wave:")
        }
        call.respondText("Response is: $response")
    }
}

fun Routing.categoryRoute() {
    post("/category") {
        val categoryList = listOf("Ubrania", "Jedzenie")
        val token = System.getenv("SLACK_TOKEN")
        val slack = Slack.getInstance()
        val response = slack.methods(token).chatPostMessage {
            it.channel("#general")
                .text(categoryList.toString())
        }
        call.respondText("Response is: $response")
    }
}

fun Routing.clothesRoute() {
    post("/clothes") {
        val clothesList = listOf("Podkoszulki", "Spodnie", "Czapka", "Rękawiczki", "AGD")
        val token = System.getenv("SLACK_TOKEN")
        val slack = Slack.getInstance()
        val response = slack.methods(token).chatPostMessage {
            it.channel("#general")
                .text(clothesList.toString())
        }
        call.respondText("Response is: $response")
    }
}

fun Routing.foodRoute() {
    post("/food") {
        val foodList = listOf("Salata", "Jablko", "Marchew", "Pieczarki", "Kapusta")
        val token = System.getenv("SLACK_TOKEN")
        val slack = Slack.getInstance()
        val response = slack.methods(token).chatPostMessage {
            it.channel("#general")
                .text(foodList.toString())
        }
        call.respondText("Response is: $response")
    }
}