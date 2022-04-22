package com.example

import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.example.plugins.*
import io.ktor.http.*
import io.ktor.server.auth.*
import io.ktor.client.*
import io.ktor.client.engine.apache.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import dev.kord.rest.request.KtorRequestHandler
import dev.kord.rest.service.RestClient

fun main() {
    embeddedServer(Netty, port=8080) {
        routing {
            homeRoute()
            categoryRoute()
            clothesRoute()
            foodRoute()
        }
    }.start(wait = true)
}
