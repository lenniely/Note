const appState = {
	title: {
		text: 'React.js 小书',
		color: 'red'
	},
	content: {
		text: '内容',
		color: 'blue'
	}
};

// function dispatch(action){
// 	switch(action.type){
// 		case 'UPDATE_TITLE_TEXT':
// 			appState.title.text = action.text;
// 			break;
// 		case 'UPDATE_TITLE_COLOR':
// 			appState.title.color = action.color;
// 			break;
// 		default:
// 			break;
// 	}
// }

function stateChanger(state, action){
	if(!state){
		return {
			title: {
				text: 'React.js 小书',
				color: 'red'
			},
			content: {
				text: '内容',
				color: 'blue'
			}
		};
	}
	switch(action.type){
		case 'UPDATE_TITLE_TEXT':
			//state.title.text = action.text;
			return {
				...state,
				title: {
					...state.title,
					text: action.text
				} 
			};
			break;
		case 'UPDATE_TITLE_COLOR':
			//state.title.color = action.color;
			return {
				...state,
				title: {
					...state.title,
					color: action.color
				}
			};
			break;
		default:
			return state;
	}
}

function createStore(reducer){
	let state =null;
	const listeners = [];
	const subscribe = (listener) => listeners.push(listener);
	const getState = () => state;
	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach((listener) => listener());
	}
	dispatch({});
	return {getState, dispatch, subscribe};
}

function renderApp(appState, oldState={}){
	renderTitle(appState.title, oldState.title);
	renderContent(appState.content, oldState.content);
}

function renderTitle(title, oldtitle={}){
	if (title === oldtitle) return;
	console.log('title modified...');
	const titleDOM = document.getElementById('title');
	titleDOM.innerHTML = title.text;
	titleDOM.style.color = title.color;
}

function renderContent(content, oldcontent={}){
	if (content === oldcontent) return;
	console.log('content modified...');
	const contentDOM = document.getElementById('content');
	contentDOM.innerHTML = content.text;
	contentDOM.style.color = content.color;
}

const store = createStore(appState, stateChanger);
let oldState = store.getState();
store.subscribe(() => {
	const newState = store.getState();
	renderApp(newState, oldState);
	oldState = newState;
});

renderApp(appState);
// dispatch({type:'UPDATE_TITLE_TEXT', text:'《React 小书》'});
// dispatch({type:'UPDATE_TITLE_COLOR', color: 'blue'});
// renderApp(appState);

store.dispatch({type:'UPDATE_TITLE_TEXT', text:'《React 小书》'});
store.dispatch({type:'UPDATE_TITLE_COLOR', color: 'blue'});

renderApp(appState);