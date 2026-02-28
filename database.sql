-- MAB-BILIS Database Schema
-- This SQL script creates the necessary database and tables for the MAB-BILIS website
-- Compatible with MySQL/XAMPP

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS mab_biliss;
USE mab_biliss;

-- ============================================
-- USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'business') DEFAULT 'business',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- BUSINESSES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS businesses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    business_name VARCHAR(150) NOT NULL,
    owner_name VARCHAR(100),
    address VARCHAR(255) NOT NULL,
    contact_number VARCHAR(50) NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    description TEXT,
    category VARCHAR(100),
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ============================================
-- PRODUCTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    business_id INT NOT NULL,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100),
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (business_id) REFERENCES businesses(id) ON DELETE CASCADE
);

-- ============================================
-- TOURIST SPOTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS tourist_spots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- BOOKINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    spot_id INT NOT NULL,
    user_id INT,
    user_name VARCHAR(100) NOT NULL,
    user_email VARCHAR(100) NOT NULL,
    user_phone VARCHAR(50) NOT NULL,
    visit_date DATE NOT NULL,
    number_of_guests INT NOT NULL DEFAULT 1,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (spot_id) REFERENCES tourist_spots(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- ============================================
-- INSERT DEFAULT ADMIN ACCOUNT
-- Password: admin123 (hashed)
-- ============================================
INSERT INTO users (name, email, password, role) 
VALUES ('Admin', 'admin@mab-bilis.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin')
ON DUPLICATE KEY UPDATE name = 'Admin';

-- ============================================
-- INSERT SAMPLE APPROVED BUSINESSES
-- ============================================
INSERT INTO businesses (user_id, business_name, owner_name, address, contact_number, status, description, category, image) VALUES 
(1, 'KERR IT SOLUTIONS', 'Admin', 'Mabinay, Negros Oriental', '09123456789', 'approved', 'Browse and order from registered local shops in Mabinay easily and quickly.', 'IT Services', 'https://img.icons8.com/color/96/000000/shop.png'),
(1, 'Don Macchiatos', 'Admin', 'Mabinay, Negros Oriental', '09223456789', 'approved', 'Track and receive your items conveniently with real-time updates.', 'Food & Beverage', 'https://img.icons8.com/color/96/000000/delivery.png'),
(1, 'Mabinay Bakery', 'Admin', 'Mabinay Public Market', '09323456789', 'approved', 'Get fresh products delivered straight from local markets.', 'Bakery', 'https://img.icons8.com/color/96/000000/bread.png');

-- ============================================
-- INSERT SAMPLE PRODUCTS
-- ============================================
INSERT INTO products (business_id, name, description, price, category, image) VALUES 
-- KERR IT SOLUTIONS Products (business_id = 1)
(1, 'Laptop - Dell Inspiron 15', 'Intel Core i5, 8GB RAM, 512GB SSD, 15.6-inch Display', 35000, 'Laptops', 'https://img.icons8.com/color/96/000000/laptop.png'),
(1, 'Laptop - HP Pavilion', 'Intel Core i7, 16GB RAM, 1TB SSD, 14-inch Display', 45000, 'Laptops', 'https://img.icons8.com/color/96/000000/laptop.png'),
(1, 'Computer Setup - Basic', 'Desktop PC with monitor, keyboard, and mouse', 25000, 'Computer Sets', 'https://img.icons8.com/color/96/000000/computer.png'),
(1, 'Laptop - Lenovo ThinkPad', 'Intel Core i7, 16GB RAM, 512GB SSD, 14-inch Display, Business Grade', 55000, 'Laptops', 'https://img.icons8.com/color/96/000000/laptop.png'),

-- Don Macchiatos Products (business_id = 2)
(2, 'Caramel Macchiato', 'Rich espresso with caramel and steamed milk', 120, 'Drinks', 'https://img.icons8.com/color/96/000000/coffee-to-go.png'),
(2, 'Iced Americano', 'Espresso shots with cold water and ice', 100, 'Drinks', 'https://img.icons8.com/color/96/000000/coffee-to-go.png'),
(2, 'Vanilla Latte', 'Espresso with steamed milk and vanilla flavor', 130, 'Drinks', 'https://img.icons8.com/color/96/000000/coffee-to-go.png'),

-- Mabinay Bakery Products (business_id = 3)
(3, 'Fresh Pandesal', 'Classic Filipino bread rolls, freshly baked', 5, 'Bread', 'https://img.icons8.com/color/96/000000/bread.png'),
(3, 'Cheese Bread', 'Soft bread filled with cheesy goodness', 15, 'Bread', 'https://img.icons8.com/color/96/000000/bread.png'),
(3, 'Ensaymada', 'Sweet buttery bread with cheese topping', 25, 'Bread', 'https://img.icons8.com/color/96/000000/bread.png'),
(3, 'Spanish Bread', 'Soft bread with sweet filling, Filipino favorite', 12, 'Bread', 'https://img.icons8.com/color/96/000000/bread.png'),
(3, 'Chocolate Chip Cookie', 'Freshly baked cookie with chocolate chips, pack of 4', 35, 'Cookies', 'https://img.icons8.com/color/96/000000/cookie.png');

-- ============================================
-- INSERT TOURIST SPOTS
-- ============================================
INSERT INTO tourist_spots (name, description, location, image) VALUES 
('Mabinay Spring', 'Discover the beautiful mountains and nature trails in Mabinay.', 'Mabinay, Negros Oriental', 'https://img.icons8.com/color/96/000000/mountain.png'),
('Niludhan Falls', 'Visit stunning waterfalls perfect for sightseeing and relaxation.', 'Mabinay, Negros Oriental', 'https://img.icons8.com/color/96/000000/waterfall.png'),
('Bulwang Caves', 'Explore the famous caves and underground wonders of the area.', 'Mabinay, Negros Oriental', 'https://img.icons8.com/color/96/000000/cave.png');

-- ============================================
-- VERIFY TABLES CREATED
-- ============================================
SHOW TABLES;

-- Test query to verify data
SELECT 'Users:' AS Info, COUNT(*) AS Count FROM users
UNION ALL
SELECT 'Businesses:', COUNT(*) FROM businesses
UNION ALL
SELECT 'Products:', COUNT(*) FROM products
UNION ALL
SELECT 'Tourist Spots:', COUNT(*) FROM tourist_spots
UNION ALL
SELECT 'Bookings:', COUNT(*) FROM bookings;
