-- Create a table Users for a postgresql database
create table Users (
    id_user serial primary key,
    name varchar not null,
    email varchar not null,
    password varchar not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp
    age int not null,
    height numeric not null,
    weight numeric not null
);

create table Body_weight (
    id_body_weight serial primary key,
    id_user int not null,
    weight numeric not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    foreign key (id_user) references Users(id_user)
);

create table Training_days (
    id_training_day serial primary key,
    id_user int not null,
    training_date varchar not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    notes varchar,
    foreign key (id_user) references Users(id_user)
);

create table Exercises (
    id_exercise serial primary key,
    name varchar not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp
);

create table Exercises_per_day (
    id_exercise_per_day serial primary key,
    id_training_day int not null,
    id_exercise int not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    notes varchar,
    foreign key (id_training_day) references Training_days(id_training_day),
    foreign key (id_exercise) references Exercises(id_exercise)
);

create table Category (
    id_category serial primary key,
    name varchar not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp
);

create table Exercise_category (
    id_exercise_category serial primary key,
    id_exercise int not null,
    id_category int not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    foreign key (id_exercise) references Exercises(id_exercise),
    foreign key (id_category) references Category(id_category)
);

create table Exercises_per_day_detail (
    id_exercise_per_day_detail serial primary key,
    id_exercise_per_day int not null,
    id_exercise int not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    foreign key (id_exercise_per_day) references Exercises_per_day(id_exercise_per_day),
    foreign key (id_exercise) references Exercises(id_exercise),
    foreign key (id_category) references Category(id_category)
);