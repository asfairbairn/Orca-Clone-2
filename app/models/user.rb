class User < ApplicationRecord
    has_many :cart_details
    has_many :reviews
    has_many :cart_items, through: :cart_details
    has_many :products, through: :reviews

    def password=(new_password)
        salt = BCrypt::Engine::generate_salt
        self.password_digest = BCrypt::Engine::hash_secret(new_password, salt)
    end

    def authenticate(password)
        salt = password_digest[0..28]
        return nil unless BCrypt::Engine::hash_secret(password, salt) == self.password_digest
        self
    end
end
