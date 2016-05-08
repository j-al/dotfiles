HISTFILE=~/.zsh_history
HISTSIZE=1000
SAVEHIST=1000

bindkey -v
zstyle :compinstall filename '/home/jl/.zshrc'

autoload -Uz compinit
compinit

autoload -U promptinit
promptinit
PROMPT='[%n@%M %~]%(!.#.$%  '
#PS1='[\u@\h \W]\$ '

alias ls='ls --color=auto'

export VISUAL=vim
export EDITOR=vim
