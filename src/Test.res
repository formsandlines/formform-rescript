let result = Calc.rel(U,I)

Js.log( result )

Js.log( result->Calc.Const.show )


let form = Form.Mark( Rel( FCtx(FCon(U)), FCtx(FUncl("Welt",1)) ) )

Js.log( form->Form.show )

let seqRe = Form.SeqRe(REsign({re_n: 2, pre_n: 1, nStep: false}), list{Mark(Mark(Empty)), form})

Js.log( (Form.Mark(Rel( FCtx(seqRe), Mark(Empty) )))->Form.show )

let fdna = Form.FDna({
  dna: list{M, N, U, I},
  varlist: Some(["a","b"]),
  form: Some(form)
})

Js.log( fdna->Form.show )