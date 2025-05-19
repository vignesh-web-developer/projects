CREATE DATABASE smartbanker;
USE smartbanker;

CREATE TABLE banks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  logo_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO banks (name, logo_url) VALUES
('Axis Bank', '/assets/axisbank.webp');

INSERT INTO banks (name, logo_url) VALUES
('SBI Bank', '/assets/SBI.jpg');

INSERT INTO banks (name, logo_url) VALUES
('RBL Bank', '/assets/rbl.jpg'),
('IndusInd Bank', '/assets/indusind.avif'),
('Canara Bank', '/assets/canarabank.jpg'),
('Indian Overseas Bank', '/assets/iob.avif'),
('Indian Bank', '/assets/indianbank.webp'),
('State Bank of India', '/assets/sbi.jpg'),
('IDFC First Bank', '/assets/idfc.jpg'),
('Kotak Mahindra Bank', '/assets/kotak.avif'),
('HDFC Bank', '/assets/hdfcbank.avif'),
('ICICI Bank', '/assets/icicibank.avif');

CREATE TABLE account_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  account_type VARCHAR(100) NOT NULL,
  description TEXT
);

INSERT INTO account_types (account_type, description) VALUES
('Savings Account', 'A basic deposit account that earns interest and is used for everyday banking needs.'),
('Salary Account', 'A type of savings account opened by employers for salary credit.'),
('NRI Account', 'Accounts for Non-Resident Indians to manage income earned in India.');

SET SQL_SAFE_UPDATES = 0;

UPDATE account_types
SET account_type = CASE account_type
  WHEN 'Savings Account' THEN 'savings'
  WHEN 'Salary Account' THEN 'salary'
  WHEN 'NRI Account'    THEN 'nri'
  ELSE account_type
END
WHERE account_type IN ('Savings Account','Salary Account','NRI Account');

CREATE TABLE holder_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  holder_type VARCHAR(100) NOT NULL,
  description TEXT
);

INSERT INTO holder_types (holder_type, description) VALUES
('kids', 'Accounts specially designed for minors, typically operated by parents or guardians.'),
('student', 'Bank accounts tailored for students with minimal or no maintenance charges.'),
('General', 'Standard bank accounts available to the general public.'),
('women', 'Accounts with added benefits or discounts aimed at female customers.'),
('senior', 'Accounts for senior citizens offering higher interest rates and special benefits.');

CREATE TABLE account_details (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bank_id INT,
  account_type_id INT,
  holder_type_id INT,
  min_balance VARCHAR(100),
  interest_rate VARCHAR(100),
  internet_banking BOOLEAN,
  premium_account BOOLEAN,
  atm_branches VARCHAR(100),
  withdraw_limit VARCHAR(100),
  non_maint_charges VARCHAR(100),
  maint_charges VARCHAR(100),
  opening_charges VARCHAR(100),
  customer_service VARCHAR(100),
  FOREIGN KEY (bank_id) REFERENCES banks(id),
  FOREIGN KEY (account_type_id) REFERENCES account_types(id),
  FOREIGN KEY (holder_type_id) REFERENCES holder_types(id)
);

INSERT INTO account_details (
  bank_id, account_type_id, holder_type_id, min_balance, interest_rate, 
  internet_banking, premium_account, atm_branches, withdraw_limit, 
  non_maint_charges, maint_charges, opening_charges, customer_service
) VALUES
-- Axis Bank - Savings (All holders)
(1, 1, 1, '1000', '3.5%', true, false, '500+', '50000', '150', '0', '250', '24x7 support'),
(1, 1, 2, '1000', '3.5%', true, false, '550+', '40000', '120', '0', '250', '24x7 support'),
(1, 1, 3, '1000', '3.5%', true, false, '600+', '60000', '180', '0', '250', '24x7 support'),
(1, 1, 4, '1000', '3.5%', true, false, '650+', '55000', '140', '0', '250', '24x7 support'),
(1, 1, 5, '1000', '3.5%', true, false, '700+', '45000', '160', '0', '250', '24x7 support'),

-- Axis Bank - Salary (General only)
(1, 2, 3, '0', '3.0%', true, true, '800+', '100000', '0', '0', '0', 'Dedicated RM'),

-- Axis Bank - NRI (General only)
(1, 3, 3, '5000', '4.0%', true, true, 'Worldwide', '200000', '500', '0', '1000', 'Global Helpline');



INSERT INTO account_details (
  bank_id, account_type_id, holder_type_id, min_balance, interest_rate, 
  internet_banking, premium_account, atm_branches, withdraw_limit, 
  non_maint_charges, maint_charges, opening_charges, customer_service
) VALUES 
(2, 1, 1, '500', '3.0%', true, false, '200+', '40000', '120', '0', '200', 'Email Support'),
(2, 1, 2, '500', '3.0%', true, false, '200+', '30000', '110', '0', '200', 'Email Support'),
(2, 1, 3, '500', '3.0%', true, false, '200+', '50000', '130', '0', '200', 'Email Support'),
(2, 1, 4, '500', '3.0%', true, false, '200+', '45000', '100', '0', '200', 'Email Support'),
(2, 1, 5, '500', '3.0%', true, false, '200+', '35000', '90', '0', '200', 'Email Support'),
(2, 2, 3, '0', '3.1%', true, true, '400+', '90000', '0', '0', '0', 'Dedicated RM'),
(2, 3, 3, '4000', '4.2%', true, true, 'NRI Desks', '150000', '400', '0', '900', '24x7 Intl'),
(3, 1, 1, '2000', '3.75%', true, false, '350+', '35000', '180', '0', '220', 'Mobile Support'),
(3, 1, 2, '2000', '3.75%', true, false, '350+', '25000', '150', '0', '220', 'Mobile Support'),
(3, 1, 3, '2000', '3.75%', true, false, '350+', '45000', '200', '0', '220', 'Mobile Support'),
(3, 1, 4, '2000', '3.75%', true, false, '350+', '40000', '190', '0', '220', 'Mobile Support'),
(3, 1, 5, '2000', '3.75%', true, false, '350+', '30000', '170', '0', '220', 'Mobile Support'),
(3, 2, 3, '0', '3.2%', true, true, '700+', '85000', '0', '0', '0', 'VIP Helpline'),
(3, 3, 3, '6000', '4.5%', true, true, 'Global', '210000', '550', '0', '1100', 'Intl Manager'),
(4, 1, 1, '1000', '3.2%', true, false, '400+', '30000', '160', '0', '240', 'Email/Phone'),
(4, 1, 2, '1000', '3.2%', true, false, '400+', '35000', '150', '0', '240', 'Email/Phone'),
(4, 1, 3, '1000', '3.2%', true, false, '400+', '40000', '170', '0', '240', 'Email/Phone'),
(4, 1, 4, '1000', '3.2%', true, false, '400+', '37000', '140', '0', '240', 'Email/Phone'),
(4, 1, 5, '1000', '3.2%', true, false, '400+', '32000', '130', '0', '240', 'Email/Phone'),
(4, 2, 3, '0', '3.0%', true, true, '600+', '75000', '0', '0', '0', 'Corporate Desk'),
(4, 3, 3, '4500', '4.1%', true, true, 'NRI Offices', '180000', '480', '0', '950', 'Intl Helpdesk'),
(5, 1, 1, '500', '3.0%', true, false, '150+', '20000', '70', '0', '150', 'Phone Support'),
(5, 1, 2, '500', '3.0%', true, false, '150+', '25000', '80', '0', '150', 'Phone Support'),
(5, 1, 3, '500', '3.0%', true, false, '150+', '30000', '90', '0', '150', 'Phone Support'),
(5, 1, 4, '500', '3.0%', true, false, '150+', '28000', '85', '0', '150', 'Phone Support'),
(5, 1, 5, '500', '3.0%', true, false, '150+', '22000', '75', '0', '150', 'Phone Support'),
(5, 2, 3, '0', '3.1%', true, true, '300+', '65000', '0', '0', '0', 'Priority Helpdesk'),
(5, 3, 3, '4000', '4.0%', true, true, 'NRI Branches', '160000', '350', '0', '850', 'Intl Toll-Free'),

-- Bank 6 – Indian Bank
(6, 1, 1, '750', '3.4%', true, false, '180+', '24000', '110', '0', '180', 'Mobile App'),
(6, 1, 2, '750', '3.4%', true, false, '180+', '28000', '115', '0', '180', 'Mobile App'),
(6, 1, 3, '750', '3.4%', true, false, '180+', '35000', '130', '0', '180', 'Mobile App'),
(6, 1, 4, '750', '3.4%', true, false, '180+', '30000', '120', '0', '180', 'Mobile App'),
(6, 1, 5, '750', '3.4%', true, false, '180+', '27000', '105', '0', '180', 'Mobile App'),
(6, 2, 3, '0', '3.3%', true, true, '500+', '80000', '0', '0', '0', 'Relationship Manager'),
(6, 3, 3, '4500', '4.1%', true, true, 'Intl Service', '170000', '400', '0', '980', 'Intl Banking Desk'),

-- Bank 7 – SBI
(7, 1, 1, '1000', '2.7%', true, false, '22000+', '60000', '50', '0', '100', 'SBI YONO'),
(7, 1, 2, '1000', '2.7%', true, false, '22000+', '70000', '60', '0', '100', 'SBI YONO'),
(7, 1, 3, '1000', '2.7%', true, false, '22000+', '90000', '70', '0', '100', 'SBI YONO'),
(7, 1, 4, '1000', '2.7%', true, false, '22000+', '85000', '65', '0', '100', 'SBI YONO'),
(7, 1, 5, '1000', '2.7%', true, false, '22000+', '75000', '55', '0', '100', 'SBI YONO'),
(7, 2, 3, '0', '3.0%', true, true, '30000+', '100000', '0', '0', '0', 'HR Desk'),
(7, 3, 3, '5000', '4.0%', true, true, 'SBI Global', '200000', '480', '0', '1200', 'Global Helpline'),

-- Bank 8 – IDFC
(8, 1, 1, '2000', '3.8%', true, false, '500+', '55000', '140', '0', '300', 'Smart App'),
(8, 1, 2, '2000', '3.8%', true, false, '500+', '60000', '150', '0', '300', 'Smart App'),
(8, 1, 3, '2000', '3.8%', true, false, '500+', '70000', '160', '0', '300', 'Smart App'),
(8, 1, 4, '2000', '3.8%', true, false, '500+', '65000', '155', '0', '300', 'Smart App'),
(8, 1, 5, '2000', '3.8%', true, false, '500+', '58000', '145', '0', '300', 'Smart App'),
(8, 2, 3, '0', '3.5%', true, true, '1000+', '110000', '0', '0', '0', 'Dedicated Banker'),
(8, 3, 3, '6000', '4.4%', true, true, 'Intl Network', '220000', '600', '0', '1300', 'NRI Support'),

-- Bank 9 – Kotak
(9, 1, 1, '3000', '3.5%', true, false, '1800+', '65000', '190', '0', '270', 'Kotak 811'),
(9, 1, 2, '3000', '3.5%', true, false, '1800+', '70000', '200', '0', '270', 'Kotak 811'),
(9, 1, 3, '3000', '3.5%', true, false, '1800+', '80000', '220', '0', '270', 'Kotak 811'),
(9, 1, 4, '3000', '3.5%', true, false, '1800+', '75000', '210', '0', '270', 'Kotak 811'),
(9, 1, 5, '3000', '3.5%', true, false, '1800+', '68000', '195', '0', '270', 'Kotak 811'),
(9, 2, 3, '0', '3.6%', true, true, '2000+', '120000', '0', '0', '0', 'Concierge'),
(9, 3, 3, '7000', '4.5%', true, true, 'Global', '230000', '700', '0', '1350', 'Intl Desk'),

-- Bank 10 – HDFC
(10, 1, 1, '5000', '3.0%', true, false, '12,000+', '70000', '200', '0', '500', 'Relationship Manager'),
(10, 1, 2, '5000', '3.0%', true, false, '12,000+', '75000', '210', '0', '500', 'Relationship Manager'),
(10, 1, 3, '5000', '3.0%', true, false, '12,000+', '90000', '220', '0', '500', 'Relationship Manager'),
(10, 1, 4, '5000', '3.0%', true, false, '12,000+', '85000', '215', '0', '500', 'Relationship Manager'),
(10, 1, 5, '5000', '3.0%', true, false, '12,000+', '78000', '205', '0', '500', 'Relationship Manager'),
(10, 2, 3, '0', '3.2%', true, true, '15,000+', '140000', '0', '0', '0', 'Platinum Service'),
(10, 3, 3, '7500', '4.8%', true, true, 'Global HDFC', '250000', '850', '0', '1500', 'NRI Platinum'),

-- Bank 11 – ICICI
(11, 1, 1, '2000', '3.1%', true, false, '13,000+', '50000', '130', '0', '350', 'iMobile'),
(11, 1, 2, '2000', '3.1%', true, false, '13,000+', '55000', '140', '0', '350', 'iMobile'),
(11, 1, 3, '2000', '3.1%', true, false, '13,000+', '70000', '150', '0', '350', 'iMobile'),
(11, 1, 4, '2000', '3.1%', true, false, '13,000+', '65000', '145', '0', '350', 'iMobile'),
(11, 1, 5, '2000', '3.1%', true, false, '13,000+', '58000', '135', '0', '350', 'iMobile'),
(11, 2, 3, '0', '3.3%', true, true, '16,000+', '130000', '0', '0', '0', 'ICICI Priority'),
(11, 3, 3, '7000', '4.6%', true, true, 'Intl Services', '240000', '750', '0', '1400', 'Global Help');

CREATE TABLE loan_types (
    id INT PRIMARY KEY AUTO_INCREMENT,
    loan_type VARCHAR(100) NOT NULL,
    description TEXT
);

INSERT INTO loan_types (loan_type, description) VALUES
('personal loan', 'A personal loan is an unsecured loan that can be used for various personal needs such as medical emergencies, travel, or education.'),
('gold loan', 'A gold loan allows borrowers to pledge their gold ornaments as collateral to receive funds.'),
('car loan', 'A car loan is used to purchase a new or used car and is typically secured against the vehicle.'),
('home loan', 'A home loan is borrowed to buy or construct a house, usually with long-term repayment options.'),
('two wheeler loan', 'This loan helps finance the purchase of two-wheelers such as motorcycles or scooters.'),
('loan against property', 'A secured loan where borrowers pledge their residential or commercial property as collateral.');

ALTER TABLE loan_types
ADD COLUMN documentation TEXT;


UPDATE loan_types SET documentation = 'ID proof, address proof, income proof'
WHERE loan_type = 'personal loan';

UPDATE loan_types SET documentation = 'Gold asset, ID proof, address proof'
WHERE loan_type = 'gold loan';

UPDATE loan_types SET documentation = 'ID proof, address proof, income proof, car quotation'
WHERE loan_type = 'car loan';

UPDATE loan_types SET documentation = 'ID proof, address proof, income proof, property documents'
WHERE loan_type = 'home loan';

UPDATE loan_types SET documentation = 'ID proof, address proof, income proof, vehicle quotation'
WHERE loan_type = 'two wheeler loan';

UPDATE loan_types SET documentation = 'Property documents, ID proof, address proof, income proof'
WHERE loan_type = 'loan against property';

CREATE TABLE loan_details (
    id INT PRIMARY KEY AUTO_INCREMENT,
    bank_id INT NOT NULL,
    loan_type_id INT NOT NULL,
    interest_rate DECIMAL(5, 2) NOT NULL,
    processing_fee DECIMAL(10, 2) NOT NULL,
    foreclosure_charges DECIMAL(10, 2) NOT NULL,
    processing_duration INT NOT NULL,  -- Duration in days
    FOREIGN KEY (bank_id) REFERENCES banks(id), 
    FOREIGN KEY (loan_type_id) REFERENCES loan_types(id)  
);

INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(1, 1, 10.5, 1500.00, 2000.00, 30),  -- Personal Loan
(1, 2, 12.0, 1800.00, 2500.00, 45),  -- Gold Loan
(1, 3, 9.8, 1200.00, 1500.00, 40),   -- Car Loan
(1, 4, 8.5, 2200.00, 3000.00, 60),   -- Home Loan
(1, 5, 14.0, 1000.00, 1200.00, 35),  -- Two Wheeler Loan
(1, 6, 11.0, 2500.00, 3500.00, 50);

INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(2, 1, 11.0, 1600.00, 2100.00, 32),  -- Personal Loan
(2, 2, 12.5, 1700.00, 2300.00, 47),  -- Gold Loan
(2, 3, 10.0, 1300.00, 1600.00, 42),  -- Car Loan
(2, 4, 9.0, 2100.00, 2800.00, 55),   -- Home Loan
(2, 5, 13.5, 1100.00, 1400.00, 38),  -- Two Wheeler Loan
(2, 6, 11.5, 2400.00, 3200.00, 48);  -- Loan Against Property

-- Insert data for IndusInd Bank (bank_id = 3)
INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(3, 1, 10.8, 1500.00, 2000.00, 34),  -- Personal Loan
(3, 2, 13.0, 1900.00, 2500.00, 46),  -- Gold Loan
(3, 3, 9.5, 1250.00, 1550.00, 41),   -- Car Loan
(3, 4, 8.8, 2200.00, 2900.00, 58),   -- Home Loan
(3, 5, 14.2, 1050.00, 1300.00, 36),  -- Two Wheeler Loan
(3, 6, 12.0, 2300.00, 3100.00, 49);  -- Loan Against Property

-- Insert data for Canara Bank (bank_id = 4)
INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(4, 1, 10.0, 1400.00, 1900.00, 31),  -- Personal Loan
(4, 2, 12.3, 1600.00, 2400.00, 44),  -- Gold Loan
(4, 3, 9.3, 1250.00, 1450.00, 39),   -- Car Loan
(4, 4, 8.7, 2100.00, 2800.00, 52),   -- Home Loan
(4, 5, 13.8, 1100.00, 1400.00, 37),  -- Two Wheeler Loan
(4, 6, 11.2, 2300.00, 3200.00, 51);  -- Loan Against Property

-- Insert data for Indian Overseas Bank (bank_id = 5)
INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(5, 1, 10.7, 1500.00, 2000.00, 33),  -- Personal Loan
(5, 2, 12.8, 1700.00, 2300.00, 48),  -- Gold Loan
(5, 3, 9.6, 1300.00, 1600.00, 43),   -- Car Loan
(5, 4, 8.9, 2150.00, 2900.00, 54),   -- Home Loan
(5, 5, 14.1, 1050.00, 1300.00, 34),  -- Two Wheeler Loan
(5, 6, 11.8, 2400.00, 3200.00, 50);  -- Loan Against Property

-- Insert data for Indian Bank (bank_id = 6)
INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(6, 1, 10.4, 1550.00, 2100.00, 35),  -- Personal Loan
(6, 2, 12.9, 1800.00, 2500.00, 49),  -- Gold Loan
(6, 3, 9.4, 1200.00, 1500.00, 40),   -- Car Loan
(6, 4, 8.6, 2200.00, 2800.00, 53),   -- Home Loan
(6, 5, 13.9, 1100.00, 1400.00, 36),  -- Two Wheeler Loan
(6, 6, 11.4, 2300.00, 3200.00, 47);  -- Loan Against Property

-- Insert data for State Bank of India (bank_id = 7)
INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(7, 1, 10.2, 1400.00, 1900.00, 30),  -- Personal Loan
(7, 2, 13.2, 1600.00, 2400.00, 46),  -- Gold Loan
(7, 3, 9.2, 1250.00, 1500.00, 41),   -- Car Loan
(7, 4, 8.4, 2100.00, 2800.00, 52),   -- Home Loan
(7, 5, 13.7, 1000.00, 1200.00, 35),  -- Two Wheeler Loan
(7, 6, 11.1, 2500.00, 3500.00, 50);  -- Loan Against Property


INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(8, 1, 9.5, 1400.00, 1900.00, 28),   -- Personal Loan
(8, 2, 12.0, 1600.00, 2200.00, 45),   -- Gold Loan
(8, 3, 8.8, 1300.00, 1600.00, 39),    -- Car Loan
(8, 4, 8.0, 2000.00, 2700.00, 50),    -- Home Loan
(8, 5, 13.3, 900.00, 1200.00, 33),    -- Two Wheeler Loan
(8, 6, 10.5, 2100.00, 3000.00, 46);   -- Loan Against Property

-- Insert data for Kotak Mahindra Bank (bank_id = 9)
INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(9, 1, 9.9, 1350.00, 1850.00, 29),    -- Personal Loan
(9, 2, 12.2, 1550.00, 2300.00, 43),   -- Gold Loan
(9, 3, 8.9, 1250.00, 1550.00, 38),    -- Car Loan
(9, 4, 7.8, 2050.00, 2700.00, 49),    -- Home Loan
(9, 5, 13.5, 950.00, 1200.00, 32),    -- Two Wheeler Loan
(9, 6, 10.7, 2100.00, 3100.00, 47);   -- Loan Against Property

-- Insert data for IDFC FIRST Bank (bank_id = 10)
INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(10, 1, 10.1, 1400.00, 1900.00, 30),  -- Personal Loan
(10, 2, 12.4, 1600.00, 2300.00, 44),  -- Gold Loan
(10, 3, 9.1, 1300.00, 1550.00, 41),   -- Car Loan
(10, 4, 8.3, 2150.00, 2800.00, 51),   -- Home Loan
(10, 5, 14.0, 1000.00, 1300.00, 36),  -- Two Wheeler Loan
(10, 6, 11.3, 2300.00, 3200.00, 48);  -- Loan Against Property

-- Insert data for Bank of Baroda (bank_id = 11)
INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(11, 1, 9.7, 1450.00, 2000.00, 31),  -- Personal Loan
(11, 2, 12.6, 1700.00, 2400.00, 46),  -- Gold Loan
(11, 3, 9.3, 1250.00, 1600.00, 42),   -- Car Loan
(11, 4, 8.2, 2200.00, 2700.00, 54),   -- Home Loan
(11, 5, 13.8, 1050.00, 1400.00, 37),  -- Two Wheeler Loan
(11, 6, 11.6, 2400.00, 3300.00, 49);  

INSERT INTO loan_details (bank_id, loan_type_id, interest_rate, processing_fee, foreclosure_charges, processing_duration) VALUES
(12, 1, 10.3, 1500.00, 2000.00, 32),  -- Personal Loan
(12, 2, 12.7, 1700.00, 2400.00, 45),  -- Gold Loan
(12, 3, 9.0, 1250.00, 1500.00, 40),   -- Car Loan
(12, 4, 8.2, 2100.00, 2700.00, 53),   -- Home Loan
(12, 5, 13.6, 950.00, 1250.00, 35),   -- Two Wheeler Loan
(12, 6, 11.0, 2400.00, 3300.00, 49);


SET SQL_SAFE_UPDATES = 0;

DESCRIBE account_details;

SELECT * FROM banks;
SELECT * FROM account_types;
SELECT * FROM holder_types;
SELECT * FROM account_details;
SELECT * FROM loan_types;
SELECT * FROM loan_details;

SELECT ad.*, b.name AS bank_name, at.account_type AS account_type, ht.holder_type AS holder_type
FROM account_details ad
JOIN banks b ON ad.bank_id = b.id
JOIN account_types at ON ad.account_type_id = at.id
JOIN holder_types ht ON ad.holder_type_id = ht.id
WHERE at.account_type = 'savings' AND ht.holder_type = 'kids' AND b.name IN ('HDFC Bank');

SELECT id FROM banks WHERE name = 'SBI Bank';
SELECT id FROM holder_types WHERE holder_type = 'student';
SELECT id FROM account_types WHERE account_type = 'savings';

SELECT * FROM banks WHERE name = 'HDFC Bank';
