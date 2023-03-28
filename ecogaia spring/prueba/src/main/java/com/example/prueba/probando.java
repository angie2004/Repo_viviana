package com.example.prueba;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class probando {

    @GetMapping("/saludar")
    public String prueba(){
        return "Holaaaaaa";
    }
}
