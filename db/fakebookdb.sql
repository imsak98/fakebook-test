CREATE TABLE friend_invitaions (
  id varchar(36) NOT NULL,
  user_id varchar(36) NOT NULL,
  friend_id varchar(36) NOT NULL,
  status varchar(50) NOT NULL DEFAULT 'PENDING',
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE users (
  id varchar(36) NOT NULL,
  name text NOT NULL,
  display_name text NOT NULL,
  email varchar(255) NOT NULL,
  password text NOT NULL,
  contact_no text NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  active tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE user_friend (
  user_id varchar(36) NOT NULL,
  friend_id varchar(36) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE friend_invitaions
  ADD PRIMARY KEY (id),
  ADD KEY user_id (user_id),
  ADD KEY friend_id (friend_id);

ALTER TABLE users
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY email (email);

ALTER TABLE user_friend
  ADD KEY user_id (user_id),
  ADD KEY friend_id (friend_id);

ALTER TABLE friend_invitaions
  ADD CONSTRAINT friend_invitaions_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT friend_invitaions_ibfk_2 FOREIGN KEY (friend_id) REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE user_friend
  ADD CONSTRAINT user_friend_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT user_friend_ibfk_2 FOREIGN KEY (friend_id) REFERENCES users (id) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;
