<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$this->load->view('frontend/template/html-header');
		$this->load->view('frontend/template/header');
		$this->load->view('frontend/home');
		$this->load->view('frontend/template/footer');
		$this->load->view('frontend/template/html-footer');
	}

	public function enviarEmail()
	{

		// Recebe os dados do input via POST
		$nome = $this->input->post('nome');
		$email = $this->input->post('email');
		$mensagem = $this->input->post('mensagem');

		$dados['nome'] = $nome;
		$dados['email'] = $email;
		$dados['mensagem'] = $mensagem;

		// Rotina de Envio de E-mail
		try {
			$this->load->library('email');
			$this->email->from('giulio.sa@preservtec.com.br');
			$this->email->to('sergiosa@creativerh.com.br');
			$this->email->subject('Formulário - Nova mensagem');
			$mensagem = $this->load->view('frontend/template/email/email',$dados,TRUE);
			$this->email->message($mensagem);
			$this->email->send();
		} catch (Exception $e) {
			echo $e;
		}

		
	}
}
