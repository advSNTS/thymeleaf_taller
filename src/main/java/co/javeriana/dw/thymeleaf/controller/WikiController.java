package co.javeriana.dw.thymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WikiController {
    
    //Controller para todo menos para contacto

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/guia")
    public String guia() {
        return "guia/guia";
    }

    @GetMapping("/glosario")
    public String glosario() {
        return "glosario/glosario";
    }

    @GetMapping("/integrantes")
    public String integrantes() {
        return "integrantes/integrantes";
    }

    @GetMapping("/error")
public String error() {
    return "error"; // crea un error.html simple en templates/
}
}
