# Playwright
|STT|Câu lệnh| Ý nghĩa |
|---|--------|---------|
|1|npm init playwright@latest|Khởi tạo dự án playwright với version mới nhất

# Git (dự án Playwright)
|STT|Giai đoạn| Câu lệnh | Ý nghĩa | Note |
|---|---------|----------|---------|------|
|1|Tạo thư mục local|N/A|Tạo thư mục gốc trên thiết bị local||
|2|Khởi tạo dự án Playwright| ```npm init playwright@latest```| Khởi tạo dự án playwright với version mới nhất|
|3| Tạo repository trên local|```git init```| Khởi tạo repo trên local| Thực hiện 01 lần|
|4| Cấu hình tên và email cho thư mục git| ```git config user.name "[name]"```<br>```git config user.email "[email]"```| Cấu hình tên, email riêng không dùng global| Thực hiện 01 lần|
|5| Thêm file vào stag | ```git add .``` <br> ```git add [tên file]```| Thêm các file được chọn vào môi trường staging| Thực hiện khi có sự thay đổi|
|6| Thêm file vào repo | ```git commit -m "[nội dung commit]"```| Thêm các file được chọn vào môi trường staging| Thực hiện khi có sự thay đổi|
|7| Kết nối repo local và github | ```git remote add origin [Link repo git hub]```| Kết nối repo local và gitjib| Thực hiện 01 lần|
|8| Push code lên github| ```git push origin main```<br> Tuy nhiên nếu muốn tạo kết nối upstream thì dùng lệnh ```git push -u origin main```, các lần tiếp theo chỉ cần lệnh ```git push```| Push code lên github| Thực hiện 01 lần|  