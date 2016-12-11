HISTFILE=~/.zsh_history
HISTSIZE=10000
SAVEHIST=10000

bindkey -v
zstyle :compinstall filename '/home/jl/.zshrc'

autoload -Uz compinit
compinit

autoload -U promptinit
promptinit
PROMPT='%n@%M:%~%(!.# .$%  '
#'[%n@%M%~ %(!.#.$%]  '
#PS1='[\u@\h \W]\$ '

alias ls='ls --color=auto'

export VISUAL=vim
export EDITOR=vim

#export FG_AIRCRAFT=/home/jl/Aircraft
export FG_AIRCRAFT=/home/jl/Aircraft/flightgear-fgaddon
