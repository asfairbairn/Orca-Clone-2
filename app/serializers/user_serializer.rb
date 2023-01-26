class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email, :street_address, :city, :zip, :state, :phone_number
end
