import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Home = ({ startIndex }) => {
  // Dummy data for blogs
  const blogs = [
    { id: 1, title: 'The Art of React', content: 'In this blog post, we explore the intricacies of React development and best practices for creating scalable applications.', author: 'John Doe' },
    { id: 2, title: 'Mastering CSS Grid', content: 'Learn how to harness the power of CSS Grid to create complex layouts with ease.', author: 'Jane Smith' },
    { id: 3, title: 'JavaScript Fundamentals', content: 'A comprehensive guide to understanding the core concepts of JavaScript programming.', author: 'David Johnson' },
    { id: 4, title: 'The World of APIs', content: 'Explore the fascinating world of APIs and learn how to integrate them into your applications.', author: 'Emily Brown' },
    { id: 5, title: 'Building Scalable Web Apps', content: 'Discover strategies for building web applications that can handle high traffic and scale effectively.', author: 'Michael Wilson' },
    { id: 6, title: 'The Future of Frontend Development', content: 'A glimpse into the future of frontend development technologies and trends.', author: 'Sophia Lee' },
    { id: 7, title: 'Optimizing Performance in React Apps', content: 'Tips and tricks for optimizing the performance of your React applications for a smoother user experience.', author: 'Ryan Garcia' },
    { id: 8, title: 'Responsive Web Design Techniques', content: 'Learn how to create responsive web designs that adapt seamlessly to various screen sizes and devices.', author: 'Jessica Martinez' },
    { id: 9, title: 'Data Visualization with D3.js', content: 'An introduction to data visualization using the powerful D3.js library.', author: 'Daniel Clark' },
    { id: 10, title: 'Advanced CSS Techniques', content: 'Take your CSS skills to the next level with advanced techniques and tricks.', author: 'Olivia Anderson' }
  ];

  // Filter blogs starting from startIndex


  return (
    <div style={{ paddingTop: '2em' }}>
      <Container className="my-4">
        <h1 className="text-center">Welcome to our Blog</h1>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {blogs.map(blog => (
            <Col key={blog.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.content}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Author: {blog.author}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
