package co.javeriana.dw.thymeleaf.controller;

import co.javeriana.dw.thymeleaf.model.Contacto;
import co.javeriana.dw.thymeleaf.repository.ContactoRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/contacto")
public class ContactoController {

    private final ContactoRepository contactoRepository;

    public ContactoController(ContactoRepository contactoRepository) {
        this.contactoRepository = contactoRepository;
    }

    // GET → muestra el formulario vacío
    @GetMapping
    public String mostrarFormulario(Model model) {
        model.addAttribute("contacto", new Contacto());
        return "contacto/contacto"; // ← debe incluir la subcarpeta
    }

    @PostMapping
    public String procesarFormulario(@ModelAttribute("contacto") Contacto contacto) {
        contactoRepository.save(contacto);
        return "redirect:/contacto?exito";
}
}