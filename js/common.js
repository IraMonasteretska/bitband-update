$(document).ready(function () {
    // SIGN UP - visibility password

    $('.togglepass').click(function () {
        if ($(this).parent().find('input').attr('type') == "password") {
            $(this).parent().find('input').attr("type", "text");
        } else {
            $(this).parent().find('input').attr("type", "password");
        }

        $(this).toggleClass('active');
    });


    // Project Board

    $('.togglebutton').click(function () {
        $('.boardsidebar').toggleClass('hide');
        $('.boardrightsect').toggleClass('enlarged');
    });


    // selects

    if ($('body *').is('select')) {
        $('.custom-select').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: -1,
        });
    }


    // sidebar project settmenu
    $('.projectsgroup__projbox .botsbtn').click(function () {
        $('.projsettlist').not($(this).parents('.projectsgroup__listwrapper').find('.projsettlist')).removeClass('show');
        $(this).parents('.projectsgroup__listwrapper').find('.projsettlist').toggleClass('show');
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.projectsgroup').length) {
            $('.projsettlist').removeClass('show');
        }
    });


    // rename project

    // $('.renamebtn').click(function (e) {
    //     e.preventDefault();
    //     $(this).parents('.projectsgroup__listwrapper').find('.projrenamesect').addClass('show');
    //     $('.projsettlist').removeClass('show');
    // });

    // $(document).click(function (e) {
    //     let $target = $(e.target);
    //     if (!$target.closest('.projrenamesect ').length && !$target.closest('.renamebtn ').length) {
    //         $('.projrenamesect ').removeClass('show');
    //     }
    // });


    // user menu (settings/logout..)

    $('.profilebox__avatar').click(function () {
        $('.profilebox__list').toggleClass('show');
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.profilebox__avatar').length && !$target.closest('.profilebox__list ').length) {
            $('.profilebox__list').removeClass('show');
        }
    });


    // project ava color

    $('.imgbox').click(function () {
        $('.projcolors').not($(this).parents('.projectsgroup__listwrapper').find('.projcolors')).removeClass('show');
        $(this).parents('.projectsgroup__listwrapper').find('.projcolors').toggleClass('show');
        $('.projsettlist').removeClass('show');
    });

    $('.projcolors__color').click(function () {
        let colorProject = $(this).attr('data-color');
        $(this).parents('.projectsgroup__listwrapper').find('.projectsgroup__projbox .imgbox').css('background', colorProject);
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.projcolors').length && !$target.closest('.imgbox').length) {
            $('.projcolors').removeClass('show');
        }
    });


    // open project popup

    $('.sidebarprojbox').click(function () {
        $(this).find('.projinfo__btn').toggleClass('rotate');
        $(this).parent().next('.projectsgroup').toggleClass('show');
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.position-relative').length) {
            $('.projectsgroup').removeClass('show');
            $('.projinfo__btn').removeClass('rotate');
        }
    });


    // select in modal

    if ($('body *').is('select')) {
        $('.custom-select.inmodal').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: -1,
            dropdownParent: $("#addpeople"),
        });
    }

    if ($('body *').is('.inmodal2')) {
        $('.custom-select.inmodal2').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: -1,
            dropdownParent: $("#taskmodal"),
        });
    }


    // team - role btn

    $('.teamroles span').click(function () {
        $(this).toggleClass('active');
        $(this).next('.teamroles__list').toggleClass('active');
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.teamroles').length) {
            $('.teamroles span').removeClass('active');
            $('.teamroles__list').removeClass('active');
        }
    });


    // sortbyname
    $('.sortbyname').click(function () {
        sortTable(0)
    });


    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("myTable");
        switching = true;
        //Set the sorting direction to ascending:
        dir = "asc";
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.getElementsByTagName("TR");
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                /*check if the two rows should switch place,
                based on the direction, asc or desc:*/
                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                //Each time a switch is done, increase this count by 1:
                switchcount++;
            } else {
                /*If no switching has been done AND the direction is "asc",
                set the direction to "desc" and run the while loop again.*/
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    }


    // OPAN TASK
    $('.toggleopentask').click(function () {
        $(this).toggleClass('rotate');
        $('.taskmodal__content').toggleClass('big');
        $('.taskmodal__details').toggleClass('hide');
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.taskrole').length) {
            $('.taskrole__selected').removeClass('active');
            $('.taskrole__userlist').hide();
        }
    });

    $('.taskrole .taskrole__selected input.name').focus(function () {
        this.select();
        $(this).parent().addClass('active');
        $(this).parent().next('.taskrole__userlist').show();
    })


    // add task

    $('.tasktype__btn').click(function () {
        $(this).next('.tasktype__list').toggle();
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.dropdown-tasktype').length) {
            $('.tasktype__list').hide();
        }
    });

    $('.tasktype__list li').click(function () {
        $('.tasktype__list').hide();
        $('.tasktype__list li').removeClass('active');
        $(this).addClass('active');
    });

    $('.addtasksect__btn').click(function () {
        $(this).hide();
        $(this).next('.addtasksect__field').show();
        $('.addtasksect .addtasksect__field').not($(this).next('.addtasksect__field')).hide();
        $('.addtasksect__btn').not($(this)).show();
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.addtasksect').length) {
            $('.addtasksect .addtasksect__btn').show();
            $('.addtasksect .addtasksect__field').hide();
        }
    });


    // PROFILE & SETTINGS

    var secTabEl = document.querySelector('#myTab li:nth-child(2) button');
    var secTab = new bootstrap.Tab(secTabEl);

    var firstTabEl = document.querySelector('#myTab li:nth-child(1) button');
    var firstTab = new bootstrap.Tab(firstTabEl);


    $('.settings').click(function () {
        secTab.show()
    });

    $('.myprofile').click(function () {
        firstTab.show()
    });


    // Settings

    if ($('body *').is('.languageselect')) {
        $(".languageselect").select2({
            dropdownParent: $("#profilesett"),
            minimumResultsForSearch: -1,

            templateResult: function (idioma) {
                var $span = $("<span><img src='img/" + idioma.id + ".png'/> " + idioma.text + "</span>");
                return $span;
            },
            templateSelection: function (idioma) {
                var $span = $("<span><img src='img/" + idioma.id + ".png'/> " + idioma.text + "</span>");
                return $span;
            },

        });
    }

    if ($('body *').is('.settselect')) {
        $('.settselect').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: -1,
            dropdownParent: $("#profilesett"),
        });
    }


    // Hide notifications

    $('.notofication__close').click(function () {
        $(this).parent().hide();
    });


    // TEST DaD

    if ($(window).width() > 991) {
        var el1 = $('.boardprbody.general');
        $(el1).each(function (i, e) {
            var sortable = Sortable.create(e, {
                group: 'sharedcol',
                animation: 150,
                scroll: true,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                ghostClass: "sortable-ghost",
                dragClass: "sortable-drag",
                emptyInsertThreshold: 60
            });
        });
    }

    var el = $('.taskswrapper');
    $(el).each(function (i, e) {
        var sortable = Sortable.create(e, {
            group: 'shared',
            animation: 150,
            scroll: true,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            ghostClass: "sortable-ghost",
            dragClass: "sortable-drag",
            emptyInsertThreshold: 60
        });
    });


    // executor

    $('.exetutor').click(function () {
        $(this).toggleClass('open');
        $(this).parent().next('.boardprbody__row').toggleClass('hide');
    })


    // add task - top block

    $('.headaddtask').click(function () {
        $(this).parents('.boardcolumn__title').next('.taskswrapper').find('.addtasksect__field').slideToggle();
    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.headaddtask').length && !$target.closest('.addtasksect__field-top').length) {
            $('.addtasksect__field-top').slideUp();
        }
    });


    // move column (board)
    $('.boardcolumn__list-mob.right').click(function (e) {
        e.preventDefault();
        $(this).parents('.boardcolumn').insertAfter($(this).parents('.boardcolumn').next());
    });
    $('.boardcolumn__list-mob.left').click(function (e) {
        e.preventDefault();
        $(this).parents('.boardcolumn').insertBefore($(this).parents('.boardcolumn').prev());
    });


    // Tags
    if ($('#input-tags').length) {
        $('#input-tags').selectize({
            delimiter: ',',
            persist: false,
            create: function (input) {
                return {
                    value: input,
                    text: input
                }
            },
            plugins: ['remove_button'],
            createOnBlur: true,
            create: true,
            onItemAdd: function (value, $item) {
                $('.tagssection__colors').show();

                $(".selectize-control.multi .selectize-input>div").tooltip({
                    placement: "bottom", // position
                    title: "Click to view all tasks from the list"
                });

                // color
                $($item).parents('.tagssection').find('.tagssection__colors').show();

                let colorSpan = $('.tagssection__colorbox span')

                $(colorSpan).click(function(){
                    let colorTag = $(this).attr("data-color");
                    $(this).parents('.tagssection').find('.selectize-control .selectize-input input').prev().css('background', colorTag);
                    // $($item).parents('.tagssection__taskbox').find('.tagssection__colors').hide();
                })
            },

            onItemRemove: function () {
                $('.tooltip').tooltip('hide');
            },
            
        });
    }

    if ($('.tagsinput').length) {
        $('.tagsinput').selectize({
            delimiter: ',',
            persist: false,
            create: function (input) {
                return {
                    value: input,
                    text: input
                }
            },
            plugins: ['remove_button'],
            createOnBlur: true,
            create: true,
            onItemAdd: function () {
                // $('.tagssection__colors').show();

                $(".selectize-control.multi .selectize-input>div").tooltip({
                    placement: "bottom", // position
                    title: "Click to view all tasks from the list"
                });
            },
            onItemRemove: function () {
                $('.tooltip').tooltip('hide');
            },
            
            onItemAdd(value, $item) {
                $($item).parents('.tagssection__taskbox').find('.tagssection__colors').show();

                let colorSpan = $('.tagssection__colorbox span')

                $(colorSpan).click(function(){
                    let colorTag = $(this).attr("data-color");
                    $(this).parents('.tagssection__taskbox').find('.selectize-control .selectize-input input').prev().css('background', colorTag);
                })
            }
        });
    }

    // show tags color list
    $(document).on('click', '.selectize-dropdown-content', function () {
        $('.tagssection__colors').show();
    });

    // close colors box
    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.selectize-control').length && !$target.closest('.tagssection__colorbox').length) {
            $('.tagssection__colors').hide();
        }
    });
    // add tag btn
    $(document).click(function () {
        if ($("#input-tags-selectized").is(":focus")) {
            $('.addtagbtn').hide();
        } else {
            $('.addtagbtn').show();
        }
    });

    // show tags section
    $('.tagopen').click(function () {
        $('.tagsli').addClass('show');
    });

    // enable tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // -----------------------
    $(document).click(function (e) {
        let $target = $(e.target);
        if ($('.item').length) {
            if (!$target.closest('.taskmodal__detailswrap .selectize-control').length && !$target.closest('.taskmodal__detailswrap .tagssection__colorbox').length && !$target.closest('.tagopen').length && !$target.closest('.tasksbox').length) {
                $('.taskmodal__detailswrap .selectize-input').addClass('border');
            } else {
                $('.taskmodal__detailswrap .selectize-input').removeClass('border');
            }
        } else {
            $('.taskmodal__detailswrap .selectize-input').removeClass('border');
        }

    });

    $(document).click(function (e) {
        let $target = $(e.target);
        if (!$target.closest('.tagssection.tagssection__taskbox').length) {
            $('.selectize-control').removeClass('show');
        } 
    });

    $(document).on('click', '.addtagbtn__taskbox', function(){
        $(this).parent('.tagssection.tagssection__taskbox').find('.selectize-control').addClass('show');
        $(this).parent('.tagssection.tagssection__taskbox').find('.selectize-control .selectize-input input').focus();
    });


    // hide color list
    $('.tagssection__colors span').click(function(){
        $(this).parents('.tagssection__colors').hide();
    });

    $('.tasksbox__bottsect .tagssection__colors span').click(function(){
        $(this).parents('.tagssection__taskbox').find('.selectize-control .selectize-input input').focus();
    });

    $('.tagsli .tagssection__colors span').click(function(){
        $(this).parents('.tagsli').find('.tagssection .selectize-control .selectize-input input').focus();
    });








    // $('.chooseFile').bind('change', function () {
    //     var filename = $(this).val();
    //     $(this).next('.file-upload').find('.noFile').text(filename.replace("C:\\fakepath\\", ""));
    // });


// Upload img
// $(".image-box").click(function (event) {
//     var previewImg = $(this).children("img");

//     $(this)
//         .siblings()
//         .children("input")
//         .trigger("click");

//     $(this)
//         .siblings()
//         .children("input")
//         .change(function () {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                 var urll = e.target.result;
//                 $(previewImg).attr("src", urll);
//                 previewImg.parent().css("background", "transparent");
//                 previewImg.show();
//                 previewImg.siblings("div").hide();
//             };
//             reader.readAsDataURL(this.files[0]);
//         });
// });





});


// Update textarea height
var textarea = document.querySelector('.adddescrtextfield');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}


// close notification
$('.invnotif__close').click(function(){
    $(this).parent('.invitation_notification').fadeOut();
});