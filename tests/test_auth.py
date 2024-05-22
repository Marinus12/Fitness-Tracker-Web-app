#!/usr/bin/python3
"""Tests the authentication"""
import unittest
from app import create_app, db
from app.models import User

class AuthTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = self.app.test_client()
        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_register(self):
        response = self.client.post('/register', json={
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'password123'
        })
        self.assertEqual(response.status_code, 201)
        self.assertIn('User registered successfully!', response.get_data(as_text=True))

    def test_login(self):
        """Tests the login authentication"""
        self.client.post('/register', json={
            'username': 'testuser',
            'email': 'test@example.com',
            'password': 'password123'
        })
        response = self.client.post('/login', json={
            'email': 'test@example.com',
            'password': 'password123'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('access_token', response.get_json())


if __name__ == '__main__':
    unittest.main()
