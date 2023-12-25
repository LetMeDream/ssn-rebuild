<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\ServicioTecnico;
use Inertia\Inertia;

class ServicioTecnicoController extends Controller
{
    //
    public function store(Request $request){
        $servicio_tecnico = new ServicioTecnico;

        $data = $request->all();
        
        ServicioTecnico::create($data);
        return back()->with('message', ['title' => 'Solicitud enviada.', 'description' => 'En breve nos comunicaremos con usted.']);
    }
}
