<!doctype html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">

        <title> Nova Mensagem</title>

        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="<?php base_url('assets/favicon.ico') ?>">

        <!-- Bootstrap Core CSS -->
        <link href="<?php echo base_url('assets/css/bootstrap.min.css')?>" rel="stylesheet">

        <!-- Estilo Principal -->
        <link rel="stylesheet" href="<?php echo base_url('assets/css/main.css')?>">


    </head>
    <body>



      <section class="email">
        <div class="container">
          <header>
            <h1>Nova Solicitação de <?php echo $nome ?></h1>
          </header>
          <p>O E-mail - <?php echo $email ?> </p><br>
          <p><?php echo $mensagem ?></p>

        </div>
      </section>


    </body>
    </html>
