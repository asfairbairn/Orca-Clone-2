class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :street_address, :city, :zip, :state, :phone_number
end
