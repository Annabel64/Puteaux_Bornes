<?php
$servername = "localhost";
$username = "";
$password = "";

// Create connection
$conn = new mysqli($servername, $username, $password);

// sql tables
// https://www.tektutorialshub.com/sql-server/binary-and-varbinary-data-types-in-sql-server/ (can only store jpeg images)
// New table for images necessary to store .png .jpg etc...
$sqlTableImages = "CREATE TABLE `images` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  --`image` longtext NOT NULL (not used)
)";

$sqlTableShops = "CREATE TABLE shops (
  name VARCHAR(25) PRIMARY KEY,
  type ENUM('', '', ''),

  longitude DECIMAL NOT NULL,
  latitude DECIMAL NOT NULL,

  logo varchar(200) NOT NULL,
  affluence varchar(200) NOT NULL, --Set as one image storing week's crowding overview

  description TEXT NOT NULL,
  phone VARCHAR(10) NOT NULL,
  address VARCHAR(40) NOT NULL,
  email VARCHAR(50) NOT NULL,
  websiteURL VARCHAR(100) NOT NULL,
  socialURL VARCHAR(100) NOT NULL,

  FOREIGN KEY (type) REFERENCES types(type)
)";

//Contains store types with their logo (ex : hairdresser --> hair scissors)
$sqlTableTypes = "CREATE TABLE types (
  type ENUM('', '', '') PRIMARY KEY,

  logo varchar(200) NOT NULL,
)";



// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

//Stores into images table all images in "images/" folder (target_dir)
if(isset($_POST['but_upload'])){
 
  $name = $_FILES['file']['name'];
  $target_dir = "images/";
  $target_file = $target_dir . basename($_FILES["file"]["name"]);

  // Select file type
  $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

  // Valid file extensions
  $extensions_arr = array("jpg","jpeg","png","gif");

  // Check extension
  if(in_array($imageFileType,$extensions_arr) ){
     // Upload file
     if(move_uploaded_file($_FILES['file']['tmp_name'],$target_dir.$name)){
        // Insert record
        $query = "insert into images(name) values('".$name."')";
        mysqli_query($con,$query);
     }

  }
 
}
?>

<form method="post" action="" enctype='multipart/form-data'>
  <input type='file' name='file' />
  <input type='submit' value='Save name' name='but_upload'>
</form>


<!--This is how to retrieve an image from images/ folder
    First technique : by ID
    Second technique : by name
-->
<?php
/*
$sql = "select name from images where id=1";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result);

$image = $row['name'];
$image_src = "images/".$image;

OR JUST

$image_name = TO BE DEFINED IN OTHER TABLES TO CALL THE RIGHT IMAGE IN images table
$image_src = "images/".$image_name

*/
?>
<!--img src='<?php //echo $image_src;  ?>' -->
