package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class hola{

    @GetMapping("/saludo")
    public String prueba(){
        return ("Holaaaaaaaaa");
    }
}
