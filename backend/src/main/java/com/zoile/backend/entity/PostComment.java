package com.zoile.backend.entity;

import java.time.LocalDate;

import org.hibernate.annotations.DynamicInsert;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@DynamicInsert
@Entity
@Getter
@Setter
@Table(name = "post_comment")
public class PostComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "post_id")
    private Long postId;

    private String username;
    private String useremail;
    private String social;

    @Column(columnDefinition = "TEXT")
    private String comment;

    @Column(name = "create_date", insertable = false, updatable = false)
    private LocalDate creatDate;

}
