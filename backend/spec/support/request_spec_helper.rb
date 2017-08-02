module RequestSpecHelper
  def json
    puts "========================"
    puts response.body
    JSON.parse(response.body)
  end
end