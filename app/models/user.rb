class User < ApplicationRecord
    has_many :cart_details
    has_many :reviews
    has_many :cart_items, through: :cart_details
    has_many :products, through: :reviews

    has_secure_password

    # validates :username, :password, :first_name, :last_name, :email, :street_address, :city, :state, :phone_number, :zip, presence: true

    validates :email, presence: true

    validates :email, uniqueness: :true

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
