create database LivaniStore
go

use LivaniStore
go

create table ProductMainCategory
(
	ProductMainCategoryID int primary key identity ,
	Title nvarchar(255) not null,
	Status bit
);
go

create table ProductCategory 
(
	ProductCategoryID int primary key identity,
	Title nvarchar (255) not null,
	Status bit,
	ProductMainCategoryID int FOREIGN KEY REFERENCES ProductMainCategory(ProductMainCategoryID)
	
);
go

create table Product 
(
	ProductID int primary key identity ,
	Title nvarchar(255) not null,
	Avatar nvarchar not null,
	Price float not null,
	Status bit,
	ProductCategoryID int FOREIGN KEY REFERENCES ProductCategory(ProductCategoryID)
);
go

create table Users
(
	 Username varchar primary key not null,
	 Userpassword varchar not null,
	 Status bit,
	 Category nvarchar
);
go

