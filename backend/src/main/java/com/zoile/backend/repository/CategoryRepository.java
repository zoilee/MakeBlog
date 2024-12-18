package com.zoile.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zoile.backend.entity.CategoryEntity;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {
    List<CategoryEntity> findAllByOrderByNumAsc();
}
