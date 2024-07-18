package com.form.formtest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
public class FormController {
    
    @PostMapping("/submitForm")
    public String submitForm(@RequestParam("name") String name,
                             @RequestParam("email") String email) {
        return "Nombre: " + name + ", Email: " + email;
    }
    
}
