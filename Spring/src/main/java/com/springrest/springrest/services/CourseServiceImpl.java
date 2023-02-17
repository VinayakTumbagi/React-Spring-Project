package com.springrest.springrest.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.model.Course;

@Service
public class CourseServiceImpl implements CourseService {

	//List<Course> list;
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImpl() {
		
//		list = new ArrayList<>();
//		list.add(new Course(145,"Core Java Course","This core contains basics of java"));
//		list.add(new Course(111,"React","Learning reactJs from basics"));
	}
	@Override
	public List<Course> getCourses() {
		
		return courseDao.findAll();
	}
	@Override
	public Course getCourse(long courseId) {
//		Course c = null;
//		for(Course course:list)
//		{
//			if(course.getId() == courseId)
//			{
//				c = course;
//				break;
//			}
//		}
		
		
		
		
		return courseDao.getOne(courseId);
	}
	@Override
	public Course addCourse(Course course) {
		
		//list.add(course);
		courseDao.save(course);
		return course;
	}
	@Override
	public Course updateCourse(Course course) {
		// TODO Auto-generated method stub
//		for(Course c:list)
//		{
//			if(c.getId()==course.getId())
//			{
//				int k = list.indexOf(c);
//				list.set(k, course);
//				break;
//			}
//		}
		
		courseDao.save(course);
		return course;
	}
	@Override
	public Course deleteCourse(long courseId) {
		
//		for(Course c:list)
//		{
//			if(c.getId()==courseId)
//			{
//				list.remove(c);
//				break;
//			}
//		}
		Course entity = courseDao.getOne(courseId);
		courseDao.delete(entity);
		return entity;
	}
	


}
