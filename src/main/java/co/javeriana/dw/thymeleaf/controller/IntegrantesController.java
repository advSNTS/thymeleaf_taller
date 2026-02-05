package co.javeriana.dw.thymeleaf.controller;


import org.springframework.web.bind.annotation.GetMapping;


public class IntegrantesController {
    

    @GetMapping("/integrantes")
    public String integrnates() {
        return "integrantes/integrantes";
    }
}