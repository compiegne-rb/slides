require 'rack'

app = proc do |env|
  [
    # http status code
    200,
    # headers
    {'Content-Type' => 'text/html'},
    # html body
    ["<head><title>Test Page</title></head><body>Hello World !</body>"]
  ]
end

run(app)
