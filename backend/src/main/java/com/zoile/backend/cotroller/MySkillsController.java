package com.zoile.backend.cotroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zoile.backend.entity.MySkills;
import com.zoile.backend.service.MySkillsService;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/myskills")
public class MySkillsController {

    @Autowired
    private MySkillsService mySkillsService;

    @GetMapping
    public ResponseEntity<List<MySkills>> getAllMySkills() {
        List<MySkills> mySkills = mySkillsService.getAllMySkills();
        return ResponseEntity.ok(mySkills);
    }

}
