package co.javeriana.dw.thymeleaf.controller;

import co.javeriana.dw.thymeleaf.model.Contacto;
import co.javeriana.dw.thymeleaf.repository.ContactoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ContactoController {

    @Autowired
    private ContactoRepository contactoRepository;

    @GetMapping("/contacto")
    public String contacto(Model model) {
        // Enviamos un objeto vacío para vincular el formulario
        model.addAttribute("contacto", new Contacto());
        return "contacto/contacto";
    }

    @PostMapping("/contacto")
    public String guardarContacto(@ModelAttribute Contacto contacto) {

        contactoRepository.save(contacto);
        

        return "redirect:/contacto?exito";
    }
}