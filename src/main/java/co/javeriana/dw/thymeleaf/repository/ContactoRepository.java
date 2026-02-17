package co.javeriana.dw.thymeleaf.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import co.javeriana.dw.thymeleaf.model.Contacto;

@Repository
public interface ContactoRepository extends JpaRepository<Contacto, Long> {
}