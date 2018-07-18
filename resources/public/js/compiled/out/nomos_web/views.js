// Compiled by ClojureScript 1.10.238 {}
goog.provide('nomos_web.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('nomos_web.subs');
/**
 * Utilitario para validacao de cores
 */
nomos_web.views.teste_collor = (function nomos_web$views$teste_collor(callback,password){
var valid_color = "is-info";
var invalid_color = "is-danger";
if(cljs.core.truth_(callback.call(null,password))){
return valid_color;
} else {
return invalid_color;
}
});
/**
 * Formulario customizado para validacao ao submeter usando specs
 */
nomos_web.views.custom_form = (function nomos_web$views$custom_form(state){
return null;
});
/**
 * Input Control para inclusão de estilos do bulma para o input
 */
nomos_web.views.input_control = (function nomos_web$views$input_control(state){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"estado","estado",-1352208670).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"fn-validation","fn-validation",-59305450).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(state)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help","p.help",-571957826),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),nomos_web.views.teste_collor.call(null,new cljs.core.Keyword(null,"fn-validation","fn-validation",-59305450).cljs$core$IFn$_invoke$arity$1(state),cljs.core.deref.call(null,new cljs.core.Keyword(null,"estado","estado",-1352208670).cljs$core$IFn$_invoke$arity$1(state)).call(null,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(state)))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"fn-validation","fn-validation",-59305450).cljs$core$IFn$_invoke$arity$1(state).call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"estado","estado",-1352208670).cljs$core$IFn$_invoke$arity$1(state)).call(null,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(state))))?"\u00C9 valido":"N\u00E3o v\u00E1lido")], null)], null);
});
nomos_web.views.input_text = (function nomos_web$views$input_text(attr,estado,callback,type){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"class","class",-2030961996),nomos_web.views.teste_collor.call(null,callback,attr.call(null,cljs.core.deref.call(null,estado))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25366_SHARP_){
return cljs.core.swap_BANG_.call(null,estado,cljs.core.assoc,attr,p1__25366_SHARP_.target.value);
})], null)], null);
});
nomos_web.views.is_name_valid_QMARK_ = (function nomos_web$views$is_name_valid_QMARK_(name){
return (cljs.core.count.call(null,name) > (10));
});
nomos_web.views.is_password_valid_QMARK_ = (function nomos_web$views$is_password_valid_QMARK_(password){
return (cljs.core.count.call(null,password) > (4));
});
nomos_web.views.form_teste = (function nomos_web$views$form_teste(param){
var form_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"age","age",-604307804),null,new cljs.core.Keyword(null,"password","password",417022471),null], null));
return ((function (form_state){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.json","pre.json",295468862),cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,form_state)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"titulo","titulo",-1497104248).cljs$core$IFn$_invoke$arity$1(param)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (form_state){
return (function (e){
e.preventDefault();

return cljs.core.println.call(null,cljs.core.deref.call(null,form_state));
});})(form_state))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nomos_web.views.input_control,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"input","input",556931961),nomos_web.views.input_text,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"label","label",1718410804),"Nome",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"estado","estado",-1352208670),form_state,new cljs.core.Keyword(null,"fn-validation","fn-validation",-59305450),((function (form_state){
return (function (p1__25367_SHARP_){
return (cljs.core.count.call(null,p1__25367_SHARP_) > (10));
});})(form_state))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nomos_web.views.input_control,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"input","input",556931961),nomos_web.views.input_text,new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"label","label",1718410804),"Password",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"estado","estado",-1352208670),form_state,new cljs.core.Keyword(null,"fn-validation","fn-validation",-59305450),nomos_web.views.is_password_valid_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Salvar"], null)], null)], null);
});
;})(form_state))
});
nomos_web.views.home_panel = (function nomos_web$views$home_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nomos-web.subs","name","nomos-web.subs/name",2017288263)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Estado Atual do Formul\u00E1rio"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nomos_web.views.form_teste,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"titulo","titulo",-1497104248),"Formul\u00E1rio de Exemplo"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"go to About Page"], null)], null)], null);
});
nomos_web.views.about_panel = (function nomos_web$views$about_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"This is the About Page."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to Home Page"], null)], null)], null);
});
nomos_web.views.panels = (function nomos_web$views$panels(panel_name){
var G__25368 = panel_name;
var G__25368__$1 = (((G__25368 instanceof cljs.core.Keyword))?G__25368.fqn:null);
switch (G__25368__$1) {
case "home-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nomos_web.views.home_panel], null);

break;
case "about-panel":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nomos_web.views.about_panel], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
});
nomos_web.views.show_panel = (function nomos_web$views$show_panel(panel_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nomos_web.views.panels,panel_name], null);
});
nomos_web.views.main_panel = (function nomos_web$views$main_panel(){
var active_panel = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nomos-web.subs","active-panel","nomos-web.subs/active-panel",-1976535888)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nomos_web.views.show_panel,cljs.core.deref.call(null,active_panel)], null);
});

//# sourceMappingURL=views.js.map?rel=1531954896757
