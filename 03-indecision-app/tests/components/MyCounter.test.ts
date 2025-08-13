import {describe, test, expect} from 'vitest';
import {mount}  from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';
//  npm i  -D @vue/test-utils: instalar dependencia para testear componentes de Vue

describe('<MyCounter />', () => {
    test('should render the component', () => {
        const wrapper = mount(MyCounter, {
           
        });
        // console.log(wrapper.html());
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('render the counter value correctly',() => {
        const value = 5;
        const wrapper = mount(MyCounter, {
            props: {
                value: 5
            }
        });

        const [counterLabel, squareLabel] = wrapper.findAll('h3');

        expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
        console.log(wrapper.find('h3').text());
        expect(wrapper.find(`[data-testid="square-label"]`).text()).toContain(
            `Square: ${value * value}`
        );

        expect(counterLabel.text()).toContain(`Counter: ${value}`);
        expect(squareLabel.text()).toContain(`Square: ${value*value}`);
    })

    test('increments tjhe counter when 1+',async() => {
        const value = 5;
        const wrapper = mount(MyCounter, {
            props: {
                value: 5
            }
        });
        const [counterLabel, squareLabel] = wrapper.findAll('h3');
        const btnIncrement = wrapper.find('button');
        await btnIncrement.trigger('click');
        expect(counterLabel.text()).toContain(`Counter: ${value+1}`);
        expect(squareLabel.text()).toContain(`Square: ${(value+1)*(value+1)}`);
        console.log(btnIncrement.html()); 
    })


    test('double click in the second button',async() => {
        const value = 5;
        const wrapper = mount(MyCounter, {
            props: {
                value: 5
            }
        });
        const [counterLabel, squareLabel] = wrapper.findAll('h3');
        const [,btnDecre] = wrapper.findAll('button');

        await btnDecre.trigger('click');
        await btnDecre.trigger('click');

        expect(counterLabel.text()).toContain(`Counter: ${value-2}`);
        expect(squareLabel.text()).toContain(`Square: ${(value-2)*(value-2)}`);
        console.log(btnDecre.html()); 
    })
});
