let elements: any = document.getElementsByClassName('first'),
    colors: string[] = ['red', 'blue', 'yellow', 'green'],
    next_arrow: any = document.getElementById('next'),
    prev_arrow: any = document.getElementById('prev'),
    current: number = 0,
    width: number = window.innerWidth,
    height: number = window.innerHeight;
    
    
for (let i: number = 0; i < elements.length; i++) {

    let rectangles: number = (width / 200) + (height / 120);

    for (let j: number = 0; j < rectangles+1; j++) {

        let svg: any = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        let line: any = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute('x1', j*400);
        line.setAttribute('x2', '-100');
        line.setAttribute('y1', '-80');
        line.setAttribute('y2', (j * 180)-20);
        line.setAttribute('stroke', colors[i]);

        if (i == 0) {
            svg.style.height = '100%';
            svg.style.width = '100%';
            
        } else {
            svg.style.width = '0%';
            svg.style.height = '0%';
            
        }

        svg.appendChild(line);
        elements[i].appendChild(svg);

        
    }

}


next_arrow.onclick = function () {
    
    next_arrow.style.pointerEvents = "none";
    
    if (current === elements.length-1) {
        current = 0;
    } else {
        current++;
    }

    
    for (let i: number = 0; i < elements.length; i++) {

        let svg: any = elements[i].children;
        
        for (let k: number = 0; k < svg.length; k++) {
            
            if (i !== current) {
            
                svg[k].style.left = '';
                svg[k].style.right = '0';
                svg[k].style.transitionDelay = (k/10) +1 + 's';
                svg[k].style.width = '0%';
                svg[k].style.height = '0%';
                
                
                if (current === 1) {
                    elements[current-1].style.zIndex = '1';
                } else {
                    elements[i].style.zIndex = '0';
                }

            } else {
                svg[k].style.right = '';
                svg[k].style.left = '0';
                svg[k].style.width = '100%';
                svg[k].style.height = '100%';
                
                svg[k].style.transitionDelay = (k/10) +.4 + 's';
           
                elements[i].style.zIndex = '5';
   
            }
        }
    }


    setTimeout(function () {
        next_arrow.style.pointerEvents = 'auto';
    }, 2200);
}

prev_arrow.onclick = function () {

    prev_arrow.style.pointerEvents = "none";
    
    if (current === 0) {
        current = elements.length - 1;
    } else {
        current--;
    }

    for (let i: number = 0; i < elements.length; i++) {

        let svg: any = elements[i].children;
        
        for (let k: number = 0; k < svg.length; k++) {
            
            if (i !== current) {
              
                svg[k].style.left = '';
                svg[k].style.right = '0';
                svg[k].style.transitionDelay = (k/10) +1 + 's';
                svg[k].style.width = '0%';
                svg[k].style.height = '0%';
                
                if (current === 1) {
                    elements[current + 1].style.zIndex = '1';
                } else {
                    elements[i].style.zIndex = '0';
                }

            } else {
                svg[k].style.right = '';
                svg[k].style.left = '0';
                svg[k].style.width = '100%';
                svg[k].style.height = '100%';
                
                svg[k].style.transitionDelay = (k/10) +.4 + 's';
           
                elements[i].style.zIndex = '5';
   
            }
        }
    }
    setTimeout(function () {
        prev_arrow.style.pointerEvents = 'auto';
    }, 2200);

}


