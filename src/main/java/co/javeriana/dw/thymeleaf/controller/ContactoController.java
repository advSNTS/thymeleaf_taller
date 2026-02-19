package co.javeriana.dw.thymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import co.javeriana.dw.thymeleaf.entity.Contacto;
import co.javeriana.dw.thymeleaf.repository.ContactoRepository;

@Controller
public class ContactoController {

    private final ContactoRepository contactoRepository;

    // Inyección por constructor (forma correcta en Spring moderno)
    public ContactoController(ContactoRepository contactoRepository) {
        this.contactoRepository = contactoRepository;
    }

    // Mostrar formulario
    @GetMapping("/contacto")
    public String mostrarFormulario(Model model) {
        model.addAttribute("contacto", new Contacto());
        return "contacto/contacto";
    }

    // Guardar datos
    @PostMapping("/contacto")
    public String guardarContacto(@ModelAttribute Contacto contacto, RedirectAttributes redirectAttributes) {

    contactoRepository.save(contacto);

    redirectAttributes.addFlashAttribute("exito", true);

    return "redirect:/contacto";
}
}
