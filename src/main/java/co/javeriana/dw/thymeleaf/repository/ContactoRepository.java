package co.javeriana.dw.thymeleaf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import co.javeriana.dw.thymeleaf.entity.Contacto;

public interface ContactoRepository extends JpaRepository<Contacto, Long> {

}
