require 'test_helper'

class Api::BasketControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_basket_create_url
    assert_response :success
  end

  test "should get show" do
    get api_basket_show_url
    assert_response :success
  end

  test "should get index" do
    get api_basket_index_url
    assert_response :success
  end

  test "should get update" do
    get api_basket_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_basket_destroy_url
    assert_response :success
  end

end
