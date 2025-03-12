
            (function(global){
                var RecommenderXBlockI18N = {
                  init: function() {
                    

'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    const v = (n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  const newcatalog = {
    "&lt; Related resources": "&lt; Recursos relacionados",
    "A resource was clicked": "Um recurso foi clicado",
    "Add new resource": "Adicionar novo recurso",
    "Add new resource &gt;&gt;": "Adicionar novo recurso &gt;&gt;",
    "Add resource": "Adicionar recurso",
    "Back to resource list mode": "Voltar ao modo de lista de recursos",
    "Check the icon to endorse this resource": "Marque o \u00edcone para endossar este recurso",
    "Click to view resources for removal": "Clique para visualizar recursos para remo\u00e7\u00e3o",
    "Click to view resources in ordinary decreasing-vote order": "Clique para visualizar os recursos em ordem decrescente normal de votos",
    "Configuration setting": "Defini\u00e7\u00e3o de configura\u00e7\u00e3o",
    "Cut-and-paste the URL of the resource.": "Recorte e cole o URL do recurso.",
    "Delete this resource": "Excluir este recurso",
    "Description": "Descri\u00e7\u00e3o",
    "Do you want to disable the UX functions which are under development?": "Quer desabilitar as fun\u00e7\u00f5es UX que est\u00e3o em desenvolvimento?",
    "Do you want to take users on a little tour when they see the RecommenderXBlock first time?": "Voc\u00ea quer levar os usu\u00e1rios em um pequeno tour quando eles virem o RecommenderXBlock pela primeira vez?",
    "Download resources": "Baixar recursos",
    "Downvote if the resource is not helpful": "Vote negativamente se o recurso n\u00e3o for \u00fatil",
    "Edit existing resource": "Editar recurso existente",
    "Edit the resource and make it more helpful for other students with this problem. Please do not give the answer directly.": "Edite o recurso e torne-o mais \u00fatil para outros alunos com esse problema. Por favor, n\u00e3o d\u00ea a resposta diretamente.",
    "Edit this resource": "Edite este recurso",
    "Endorse Resource": "Endossar recurso",
    "Endorse resource": "Endossar recurso",
    "Endorse resource without permission": "Endossar recurso sem permiss\u00e3o",
    "Endorse this resource and give the reason why you do that.": "Endosse este recurso e explique o motivo pelo qual voc\u00ea faz isso.",
    "Entering add resource mode": "Entrando no modo adicionar recurso",
    "Entering edit resource mode": "Entrando no modo de edi\u00e7\u00e3o de recursos",
    "Entering flag resource mode": "Entrando no modo de recurso de sinalizador",
    "Entering import resource mode": "Entrando no modo de recurso de importa\u00e7\u00e3o",
    "Export resources": "Exportar recursos",
    "Flag Resource": "Recurso de sinaliza\u00e7\u00e3o",
    "Flag resource": "Recurso de sinaliza\u00e7\u00e3o",
    "Flag this resource as problematic and give your reason": "Sinalize este recurso como problem\u00e1tico e d\u00ea o motivo",
    "From page {fromPage} To page {toPage}": "Da p\u00e1gina {fromPage} Para a p\u00e1gina {toPage}",
    "Give a meaningful reason for why this resource should be removed": "D\u00ea uma raz\u00e3o significativa pela qual este recurso deve ser removido",
    "Give a paragraph of summary of the resource; the summary should be more detailed than you gave in Title": "Forne\u00e7a um par\u00e1grafo de resumo do recurso; o resumo deve ser mais detalhado do que voc\u00ea forneceu no t\u00edtulo",
    "Give a short (1-3 sentence) summary of the resource; ideally, this should be concise, but give enough detail to let students know whether this resources is useful to them": "Fa\u00e7a um breve resumo (1-3 frases) do recurso; idealmente, deve ser conciso, mas fornecer detalhes suficientes para que os alunos saibam se esses recursos s\u00e3o \u00fateis para eles",
    "Go back to the main list": "Volte para a lista principal",
    "Here is a list of reasons why students think this resource problematic:": "Aqui est\u00e1 uma lista de raz\u00f5es pelas quais os alunos consideram este recurso problem\u00e1tico:",
    "Hide related resources": "Ocultar recursos relacionados",
    "Hide the recommendations list": "Ocultar a lista de recomenda\u00e7\u00f5es",
    "Hovering resource": "Recurso flutuante",
    "How many page icons in pagination control (i.e., page range)? The icons for pages from (current page - page range) to (current page + page range) will be shown.": "Quantos \u00edcones de p\u00e1gina no controle de pagina\u00e7\u00e3o (ou seja, intervalo de p\u00e1ginas)? Os \u00edcones para p\u00e1ginas de (p\u00e1gina atual - intervalo de p\u00e1ginas) a (p\u00e1gina atual + intervalo de p\u00e1ginas) ser\u00e3o mostrados.",
    "How many resources you want to show in each page of the resource list?": "Quantos recursos voc\u00ea deseja mostrar em cada p\u00e1gina da lista de recursos?",
    "Import resources": "Importar recursos",
    "Invalid location URL provided": "URL de local inv\u00e1lido fornecido",
    "Location": "Localiza\u00e7\u00e3o",
    "No": "N\u00e3o",
    "Only staff can import resources": "Somente a equipe pode importar recursos",
    "Please submit the JSON file obtained with the download resources button": "Envie o arquivo JSON obtido com o bot\u00e3o de download de recursos",
    "Preview image (typically, a screenshot)": "Imagem de visualiza\u00e7\u00e3o (normalmente, uma captura de tela)",
    "Preview screenshot:": "Captura de tela de visualiza\u00e7\u00e3o:",
    "Provide a file of resource list in JSON format": "Forne\u00e7a um arquivo de lista de recursos no formato JSON",
    "Provide a file of resource screenshot": "Forne\u00e7a um arquivo de captura de tela do recurso",
    "Provide a meaningful description so other students know whether this is useful to them": "Forne\u00e7a uma descri\u00e7\u00e3o significativa para que outros alunos saibam se isso \u00e9 \u00fatil para eles",
    "Provide a meaningful title so other students know whether this is useful to them": "Forne\u00e7a um t\u00edtulo significativo para que outros alunos saibam se isso \u00e9 \u00fatil para eles",
    "Provide a resource description": "Forne\u00e7a uma descri\u00e7\u00e3o do recurso",
    "Provide a resource location in url, required": "Forne\u00e7a um local de recurso no URL, obrigat\u00f3rio",
    "Provide a resource screenshot": "Forne\u00e7a uma captura de tela do recurso",
    "Provide a resource title, required": "Forne\u00e7a um t\u00edtulo de recurso, obrigat\u00f3rio",
    "Reason": "Raz\u00e3o",
    "Reason for why this resource should be endorsed": "Raz\u00e3o pela qual este recurso deve ser endossado",
    "Reason for why this resource should be flagged": "Raz\u00e3o pela qual este recurso deve ser sinalizado",
    "Reason for why this resource should be removed": "Raz\u00e3o pela qual este recurso deve ser removido",
    "Recommend a new resource which may be helpful to other students solving this problem": "Recomende um novo recurso que pode ser \u00fatil para outros alunos resolverem este problema",
    "Remove Resource": "Remover recurso",
    "Remove resource": "Remover recurso",
    "Remove this resource and give the reason why you do that": "Remova este recurso e explique o motivo pelo qual voc\u00ea faz isso",
    "Remove this resource and give the reason why you do that.": "Remova este recurso e explique o motivo pelo qual voc\u00ea faz isso.",
    "Resource title": "T\u00edtulo do recurso",
    "Resource: ": "Recurso: ",
    "Resources (in JSON format):": "Recursos (em formato JSON):",
    "Save change": "Salvar as mudan\u00e7as",
    "Set the student-view, client side configurations for RecommenderXblock.": "Defina as configura\u00e7\u00f5es do lado do cliente da visualiza\u00e7\u00e3o do aluno para RecommenderXblock.",
    "Show a list of student-recommented related resources": "Mostrar uma lista de recursos relacionados recomendados pelos alunos",
    "Show related resources": "Mostrar recursos relacionados",
    "Size of uploaded file exceeds threshold": "O tamanho do arquivo enviado excede o limite",
    "Suggest a resource which can help other students with this problem. Please do not give the answer directly.": "Sugira um recurso que possa ajudar outros alunos com esse problema. Por favor, n\u00e3o d\u00ea a resposta diretamente.",
    "Suggest resource": "Sugerir recurso",
    "The configuration of pyfs is not properly set": "A configura\u00e7\u00e3o do pyfs n\u00e3o est\u00e1 definida corretamente",
    "The content you typed has not been submitted yet. Are you sure to go back?": "O conte\u00fado que voc\u00ea digitou ainda n\u00e3o foi enviado. Tem certeza que vai voltar?",
    "The reason why it is endorsed is:": "A raz\u00e3o pela qual \u00e9 endossado \u00e9:",
    "The resource you are attempting to provide already exists": "O recurso que voc\u00ea est\u00e1 tentando fornecer j\u00e1 existe",
    "The resource you are attempting to provide has been disallowed by the staff. Reason: ": "O recurso que voc\u00ea est\u00e1 tentando fornecer n\u00e3o foi permitido pela equipe. Raz\u00e3o: ",
    "The selected resource does not exist": "O recurso selecionado n\u00e3o existe",
    "This is a list of recommended resources. If you\\": "Esta \u00e9 uma lista de recursos recomendados. Se voc\u00ea\\",
    "This is a list of resources your fellow students thought might be helpful. If you find another useful resource, either on edx.org or elsewhere, please add it. If you can improve the description or preview of a resource, please do so as well. If you find a resource helpful, upvote it. If it&rsquo;s not so helpful, downvote it. If it has issues (illegal material, incorrect, etc.), please flag it and let us know the reason.": "Esta \u00e9 uma lista de recursos que seus colegas consideraram que poderiam ser \u00fateis. Se voc\u00ea encontrar outro recurso \u00fatil, seja em edx.org ou em outro lugar, adicione-o. Se voc\u00ea puder melhorar a descri\u00e7\u00e3o ou visualiza\u00e7\u00e3o de um recurso, fa\u00e7a-o tamb\u00e9m. Se voc\u00ea achar um recurso \u00fatil, vote nele. Se n\u00e3o for t\u00e3o \u00fatil, vote negativamente. Se houver problemas (material ilegal, incorreto, etc.), sinalize-o e informe-nos o motivo.",
    "This resource is endorsed by staff": "Este recurso \u00e9 endossado pela equipe",
    "This will be a list of resources your fellow students thought might be helpful, but it is empty currently. If you find useful resources, either on edx.org or elsewhere, please add it.": "Esta ser\u00e1 uma lista de recursos que seus colegas consideraram que poderiam ser \u00fateis, mas est\u00e1 vazia no momento. Se voc\u00ea encontrar recursos \u00fateis, seja em edx.org ou em outro lugar, adicione-os.",
    "Title": "T\u00edtulo",
    "Tried to access flagged resources without staff permission": "Tentei acessar recursos sinalizados sem permiss\u00e3o da equipe",
    "Unendorse resource": "Cancelar endosso de recurso",
    "Unflag resource": "Desmarcar recurso",
    "Upload a preview screenshot (in GIF/PNG/JPG) of the resource; ideally, this should let students know whether this resources is useful to them": "Carregue uma captura de tela de visualiza\u00e7\u00e3o (em GIF/PNG/JPG) do recurso; idealmente, isso deve permitir que os alunos saibam se esses recursos s\u00e3o \u00fateis para eles",
    "Upload resources": "Carregar recursos",
    "Upload resources in JSON format to the database.": "Fa\u00e7a upload de recursos no formato JSON para o banco de dados.",
    "Upvote if the resource is helpful": "Vote positivamente se o recurso for \u00fatil",
    "Votes": "Votos",
    "Why would you like to flag this resource? The staff will review all flagged resources, and remove inappropriate ones (spam, incorrect, abusive, etc.). Giving a clear reason will help us do this efficiently.": "Por que voc\u00ea gostaria de sinalizar este recurso? A equipe analisar\u00e1 todos os recursos sinalizados e remover\u00e1 os inadequados (spam, incorretos, abusivos, etc.). Fornecer um motivo claro nos ajudar\u00e1 a fazer isso de forma eficiente.",
    "Yes": "Sim",
    "You don't have the permission to remove this resource": "Voc\u00ea n\u00e3o tem permiss\u00e3o para remover este recurso",
    "cancel and go back to resource list": "cancelar e voltar para a lista de recursos",
    "mode": "modo",
    "votes": "votos"
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \u00e0\\s H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%y %H:%M:%S",
      "%d/%m/%y %H:%M:%S.%f",
      "%d/%m/%y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j \\d\\e F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};


                  }
                };
                RecommenderXBlockI18N.init();
                global.RecommenderXBlockI18N = RecommenderXBlockI18N;
            }(this));
        