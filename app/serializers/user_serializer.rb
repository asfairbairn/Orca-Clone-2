class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email, :street_address, :city, :zip, :state, :phone_number, :cart_details_id

  def cart_details_id
    object.cart_details.last.id
  end
end
