class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :street_address, :city, :state, :phone_number
end
