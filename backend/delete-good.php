<?php
    if (isset($_POST['eliminar'])) {
        include('../connection/conn.php');
        $clave=$_POST['clave'];
        $query="DELETE FROM registros WHERE `registros`.`clave` = '$clave'";
        $result=mysqli_query($conexion,$query);
        if ($result) {
            header('Location:../registros.php');
        }
    }



?>