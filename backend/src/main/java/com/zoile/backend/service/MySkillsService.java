package com.zoile.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zoile.backend.entity.MySkills;
import com.zoile.backend.repository.MyskillsRepository;

@Service
public class MySkillsService {

    @Autowired
    private MyskillsRepository myskillsRepository;

    // save
    public MySkills saveMySkills(MySkills myskills) {
        return myskillsRepository.save(myskills);
    }

    // update
    public Optional<MySkills> updateMySkills(Long id, MySkills updateMySkills) {

        return myskillsRepository.findById(id).map(skill -> {
            skill.setName(updateMySkills.getName());
            skill.setValue(updateMySkills.getValue());
            return myskillsRepository.save(skill);
        });
    }

    // delete
    public boolean deleteMySkills(Long id) {
        if (myskillsRepository.existsById(id)) {
            myskillsRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // list
    public List<MySkills> getAllMySkills() {
        return myskillsRepository.findAll();
    }

}
